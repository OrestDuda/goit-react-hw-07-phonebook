import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';


const contacts = createReducer([], {
    [actions.fetchContactsSuccess]: (state, action)=>{return action.payload},
    [actions.addContactSuccess]: (state, action)=>{return[...state, action.payload]},
    [actions.deleteContactSuccess]: (state, action)=>{ return state.filter(({ id }) => id !== action.payload)},
});

const filter = createReducer('', {
    [actions.changeFilter]: (state, action)=>action.payload,
});

const loading = createReducer(false, {
    [actions.fetchContactsRequest]: ()=>true,
    [actions.fetchContactsSuccess]: ()=>false,
    [actions.fetchContactsError]: ()=>false,
    [actions.addContactRequest]: ()=>true,
    [actions.addContactSuccess]: ()=>false,
    [actions.addContactError]: ()=>false,
    [actions.deleteContactRequest]: ()=>true,
    [actions.deleteContactSuccess]: ()=>false,
    [actions.deleteContactError]: ()=>false,
})

export default combineReducers({
    contacts,
    filter,
    loading,
});