import axios from "axios";
import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3004';

const fetchContacts =()=>dispatch=>{
    dispatch(actions.fetchContactsRequest());

    axios.get('/contacts')
        .then(({data})=>dispatch(actions.fetchContactsSuccess(data)))
        .catch(error=>dispatch(actions.fetchContactsError()))
};
const addContact = inputData => dispatch=>{
    const contact={
        name: inputData.name, number: inputData.number
    };
    dispatch(actions.addContactRequest());

    axios.post('/contacts', contact)
        .then(({data})=>
            dispatch(actions.addContactSuccess(data)))
        .catch(error=>dispatch(actions.addContactError()))
};
const deleteContact = contactID => dispatch =>{
    dispatch(actions.deleteContactRequest());
    axios.delete(`/contacts/${contactID}`)
        .then(()=>
            dispatch(actions.deleteContactSuccess(contactID)))
        .catch(error=>dispatch(actions.deleteContactError()))
};

export default {addContact, deleteContact, fetchContacts};