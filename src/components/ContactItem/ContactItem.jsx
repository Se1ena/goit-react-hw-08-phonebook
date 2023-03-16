import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { Btn, Contact, Item } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <Contact>
        {name}: {number}
      </Contact>
      <Btn type="button" onClick={handleDelete}>
        Delete
      </Btn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
