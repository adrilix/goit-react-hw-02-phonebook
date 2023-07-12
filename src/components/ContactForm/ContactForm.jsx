import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({ [name]: value });
      };

    handleSubmit = evt => {
        evt.preventDefault();
        // забрать через пропсы данные state в App (вызываем метод, который прокинули через пропсы для контактФорм)
        this.props.onSubmit(this.state);
        // this.resetInput();
      };



    render() {
        // const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        // pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // pattern="/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Ba"
                        required
                    />
                </label>

                <label>
                    Number
                    <input
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        // pattern="/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/"
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>

                <button type="submit">
                    Add contact
                </button>
            </form>
        )
    }


}

export default ContactForm;