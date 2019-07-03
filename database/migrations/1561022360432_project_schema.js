'use strict'

/** @type {import('lucid-mongo/src/Migration')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (collection) => {
      collection.increments();
      collection.index('name', {name: 1}, {unique: true});
      collection.index('public_key', {name: 1}, {unique: true});
      collection.timestamps();
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
