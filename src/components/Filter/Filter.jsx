import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

import { Title } from './Filter.styled';

const Filter = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  if (contacts.length === 0) {
    return null;
  }

  return (
    <>
      <Title>Find contacts by name</Title>
      <input
        type="text"
        name="filter"
        placeholder="Search contact"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;