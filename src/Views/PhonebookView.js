import React from 'react';
import ContactForm from '../Components/ContactForm/ContactForm.js';
import ContactList from "../Components/Contacts/ContactList";
import ContactFilter from "../Components/Contacts/ContactFilter";
import Container from "../Components/Container/Container";

const PhonebookView=()=>{
    return(
        <div>
        <Container>
            <h2>Phonebook</h2>
            <ContactForm />
            <h2>Contacts</h2>
            <ContactFilter />
            <ContactList />
        </Container>
        </div>
    )
};

export default PhonebookView;