import { createSelector } from '@reduxjs/toolkit';

const getLoading = state=>state.phonebook.loading;
const getFilter = state=>state.phonebook.filter;
const getContacts = state=>state.phonebook.contacts;

const getFilteredContacts = createSelector(
    [getContacts, getFilter],
    (allContacts, filter)=>{
        const normalizedFilter = filter.toLowerCase();
        return allContacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );}
);
export default {
    getLoading,
    getFilter,
    getContacts,
    getFilteredContacts,
};