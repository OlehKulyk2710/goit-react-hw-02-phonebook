import './ContactList.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const normalizedFilter = filter.toLowerCase();
  const contactsByFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className="contacts__list">
      {contactsByFilter.map(({ id, name, number }) => (
        <li key={id} className="contacts__item">
          {`${name}: ${number}`}
          <button
            type="button"
            className="contacts__btn"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
};
