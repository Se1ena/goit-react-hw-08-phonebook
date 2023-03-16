import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { Form, Btn, Label } from 'components/ContactForm/ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log(`Error in ${e.target.name}`);
    }
  };

  const addNewContact = (name, number) => {
    if(checkDoubleContact(name)) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    const newContact = {
      name,
      phone: number,
    };
    dispatch(addContact(newContact));
  }

  const checkDoubleContact = (name) => {
    return contacts.find(contact => contact.name === name);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addNewContact(name, number);
    setName('');
    setNumber('');
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        <div>Name</div>
        <input
        value={name}
        onChange={handleInputChange}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
          placeholder="Enter name"
        />
      </Label>
      <Label>
        <div>Number</div>
        <input
        value={number}
        onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required={true}
          placeholder="Enter phone number"
        />
      </Label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactForm;
