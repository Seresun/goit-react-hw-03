import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import './App.css';

const App = () => {
  
  const [contacts, setContacts] = useState(() => {
 
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  
  const [filter, setFilter] = useState('');

  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  const addContact = (newContact) => {
   
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (isDuplicate) {
      alert(`${newContact.name} is already in the contact list.`);
      return;
    }

  
    setContacts([...contacts, newContact]);
  };


  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

 
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
