import PropTypes from 'prop-types'
import styles from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.contact}>
      {contact.name}: {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Contact
