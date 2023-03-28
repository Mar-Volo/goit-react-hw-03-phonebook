import PropTypes from 'prop-types';
import { FilterContact } from './Filter.styled';

export const Filter = ({ value, searchContact }) => {
  return (
    <div>
      <p>Find contacts by name</p> <br />
      <FilterContact
        type="text"
        value={value}
        name="filter"
        placeholder="Search contact"
        onChange={searchContact}
      />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  searchContact: PropTypes.func.isRequired,
};
