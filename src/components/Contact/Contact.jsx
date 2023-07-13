import React from 'react';
import PropTypes from 'prop-types';
import {
    ContactStyled,
    ContactDataStyled,
    ButtonDeleteStyled
} from './ContactStyled'

const Contact = ({ name, number, onDeleteContact }) => (
    <ContactStyled>
        <ContactDataStyled>{name}</ContactDataStyled>
        <ContactDataStyled>{number}</ContactDataStyled>
        <ButtonDeleteStyled onClick={onDeleteContact} type="button">
            delete
        </ButtonDeleteStyled>
    </ContactStyled>
);

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
