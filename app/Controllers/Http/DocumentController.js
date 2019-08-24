'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Entity = use('App/Models/Entity');
/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Document = use('App/Models/Document');
/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const Helpers = use('Helpers');

/** @type {import('@adonisjs/websocket/src/Ws')} */
const Ws = use('Ws');
/** @type {import('@adonisjs/websocket/src/Channel')} */
const channel = Ws.getChannel('document');

const Drive = use('Drive');

class DocumentController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // get all document data in table
    // need parameter entity id as collection name
    // can only be called from StarfallCMS only(must be login)
    async index({response, params}){
        const id = params.id;
        try{
            Logger.info(`fetch documents in entity with id ${id}`);
            const entity = await Entity.findOrFail(id);
            return response.json(await entity.documents().fetch());
        }catch(err){
            Logger.warning(`fail to fetch documents in entity with id ${id}`);
            return response.notFound(`entity with id ${id} not found`);
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // add new document into table of
    // need parameter entity id as collection name
    // can only be called from StarfallCMS only(must be login)
    // accept data
    async add({request, response, params}){
        const id = params.id;
        let {data} = request.post();

        try{
            Logger.info(`add new document into entity ${id}`);

            // find entity first
            const entity = await Entity.findOrFail(id);

            // then save using entity
            const document = new Document();
            document.data = data;
            await entity.documents().save(document);

            // return document id
            response.ok({msg: 'succeed adding new document', id: document._id});
            
            const topic = channel.topic('document');
            if(topic){
                topic.broadcast('add', document);
            }
        }
        catch(error){
            Logger.warning('Fail to add new document');
            Logger.warning(error);
            return response.internalServerError('Fail to add new document');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // change existing document data
    // need parameter document id
    // can only be called from StarfallCMS only(must be login)
    // accept data
    async modify({request, response, params}){
        const id = params.id;
        let {data} = request.post();

        try{
            Logger.info(`modify existing document with id: ${id}`);

            // then save using entity
            const document = await Document.findOrFail(id);
            document.data = data;
            await document.save();

            response.ok('succeed modify existing document');
            
            const topic = channel.topic('document');
            if(topic){
                topic.broadcast('modify', {
                    _id: document._id, 
                    data: document.data,
                    updated_at: document.updated_at
                });
            }
        }
        catch(error){
            Logger.warning('Fail to modify document');
            Logger.warning(error);
            return response.internalServerError('Fail to modify document');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    */
    // delete documents
    // will receive post data of array of id
    // can only be called from StarfallCMS only(must be login)
    async delete({request, response}){
        const {ids} = request.post();

        try{
            if(ids.length === 0) throw('No documents to be deleted');

            // get project id, and entity id
            let entity = await Document.find(ids[0]);
            entity = await Entity.find(entity.entity_id);

            Logger.info(`delete documents`);
            await Document.query().whereIn('_id', ids).delete();

            // loop ids
            // delete folder project/entity/document if exist
            for(const id of ids){
                const path = `${entity.project_id}/${entity._id}/${id}`;
                if(await Drive.exists(path))
                    await Drive.delete(path);
            }

            response.ok('succeed deleting documents');

            const topic = channel.topic('document');
            if(topic){
                topic.broadcast('delete', {ids: ids});
            }
        }
        catch(error){
            Logger.warning('Fail to delete document');
            Logger.warning(error);
            return response.internalServerError('Fail to delete documents');
        }
    }
}

module.exports = DocumentController
