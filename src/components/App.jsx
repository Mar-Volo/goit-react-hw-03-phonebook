import { Component } from 'react';
import shortid from 'shortid';

import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/Contacts';
import { Title } from './Layout/Layout.styled';
import { Filter } from './Filter/Filter';

import GlobalStyle from 'GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactId = () => {
    return shortid.generate();
  };

  onAddContact = data => {
    const { contacts } = this.state;
    const searchContact = contacts
      .map(contact => contact.name)
      .includes(data.name);
    if (searchContact) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        ...data,
        id: this.contactId(),
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  filterHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Layout>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.onAddContact} />
        <Title>Contacts</Title>

        <Filter value={filter} searchContact={this.filterHandler} />

        <ContactsList
          filterContacts={visibleContacts}
          onDeleteContact={this.onDelete}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
