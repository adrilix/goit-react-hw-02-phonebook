import React, { Component } from 'react';

import ContactForm from '../ContactForm/ContactForm'
import { nanoid } from 'nanoid';
import { DivStyled } from './AppStyled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputName = event => {
    const newContactName = event.target.value;
    console.log(newContactName);
  };

  handleInputNumber = event => {
    const newContactNumber = event.target.value;
    console.log(newContactNumber);
  };

  handleSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
  };

  render() {
    // const { contacts, filter } = this.state;
    return (
        <DivStyled>
          <h1>Phonebook</h1>
        <ContactForm onSubmit = {this.handleSubmit}></ContactForm>

        {/* <div>
            <h2>Contacts</h2>
            <label>
              Find contact by name
              <input type="text"name="name"/>
            </label>
          </div>

        <div>
          <ul>
            <li>
              {this.state.contacts[0].id}
              <button>delete contact</button>
            </li>
            <li>
              {this.state.contacts[1].id}
              <button>delete contact</button>
            </li>
            <li>
              {this.state.contacts[2].id}
              <button>delete contact</button>
            </li>
            <li>
              {this.state.contacts[3].id}
              <button>delete contact</button>
            </li>
          </ul>
        </div> */}
        </DivStyled>
    );
  }
}

export default App;
