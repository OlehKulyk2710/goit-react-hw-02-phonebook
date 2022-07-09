import React, { Component } from 'react';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  updateContacts = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    setTimeout(() => console.log(this.state.contacts), 500);
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="container">
        <h1 className="title__phonebook">Phonebook</h1>
        <ContactForm onUpdateContacts={this.updateContacts} />

        <h2 className="title__contacts">Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={contacts} filter={filter} />
      </div>
    );
  }
}

export default App;
