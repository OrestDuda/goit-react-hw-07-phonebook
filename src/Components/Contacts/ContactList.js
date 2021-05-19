import React, {Component} from 'react'
import PropTypes from "prop-types";
import styles from './Contacts.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../Redux/Phonebook/contacts-operations';
import contactsSelectors from '../../Redux/Phonebook/contacts-selectors';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class ContactList extends Component{
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        return(
            <>
                {this.props.isLoadingContacts &&
                <Loader
                    type="TailSpin"
                    color="teal"
                    height={130}
                    width={130}
                    style={{
                        textAlign: "center",
                    }}
                />}
                <ul>
                    {this.props.contacts.map(({id, name, number})=>(
                            <li key={id}>
                                <p className={styles.contact}>{name}: {number}</p>
                                <button className={styles.delete} type='button' onClick={() => this.props.onDeleteContact(id)}>Delete</button>
                            </li>
                        )
                    )}
                </ul>
            </>
        )
    }
}

ContactList.propTypes = {
    onDeleteContact: PropTypes.func,
    fetchContacts: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string,
        })),
};

const mapStateToProps = (state) => ({
    isLoadingContacts: contactsSelectors.getLoading(state),
    contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: ()=>dispatch(contactsOperations.fetchContacts()),
    onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);