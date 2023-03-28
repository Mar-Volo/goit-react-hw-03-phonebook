import PropTypes from 'prop-types';

import { Contacts, Contact, DelButton } from './Contacts.styled';

export const ContactsList = ({ filterContacts, onDeleteContact }) => {
  return (
    <Contacts>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            {name}: {number}
            <DelButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DelButton>
          </Contact>
        );
      })}
    </Contacts>
  );
};

ContactsList.propTypes = {
  filterContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
