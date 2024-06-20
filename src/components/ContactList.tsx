import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store'
import ContactItem from './ContactItem'
import { Contact } from '../reducers/contactReducer'
import { ListContact } from '../styles/styles'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: AppState) => state.contacts.contacts)

  return (
    <div>
      <ListContact>Lista de Contatos</ListContact>
      <ol>
        {contacts.map((contact: Contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ol>
    </div>
  )
}

export default ContactList
