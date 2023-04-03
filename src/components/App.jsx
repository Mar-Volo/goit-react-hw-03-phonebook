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
    contacts: [],
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

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevPropps, prevState) {
    const { prevContacts} = prevState;
    const { contacts } = this.state;
    if (prevContacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

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
