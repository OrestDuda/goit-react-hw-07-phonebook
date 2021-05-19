import contactsReducer from './Phonebook/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';


const middleware = getDefaultMiddleware();

const store = configureStore({
    reducer: {
        phonebook: contactsReducer,
    },
    middleware,
});

export default store;