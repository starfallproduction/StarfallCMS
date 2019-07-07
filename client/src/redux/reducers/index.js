import {combineReducers} from 'redux';

import authorizationReducer from './authorizationReducer';
import {projectPopoverReducer, projectsReducer} from './projectReducer';
import {entitiesReducer} from './entityReducer';
import {documentsReducer, currentDocumentReducer} from './documentReducer';
import {notificationReducer, dialogReducer, targetReducer, sidebarReducer} from './globalReducer';

const reducers = combineReducers(
    {
        authStatus: authorizationReducer,
        projects: projectsReducer,
        entities: entitiesReducer,
        documents: documentsReducer,
        currentDocument: currentDocumentReducer,
        dialog: dialogReducer,
        notification: notificationReducer,
        target: targetReducer,
        sidebar: sidebarReducer,
        projectPopover: projectPopoverReducer
    }
);

export default reducers;