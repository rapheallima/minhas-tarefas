// components/ContactItem.tsx

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeContact } from '../actions/contactActions'
import { Contact } from '../reducers/contactReducer'
import EditContactForm from './EditContact'

interface Props {
  contact: Contact
}

const ContactItem: React.FC<Props> = ({ contact }) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)

  const handleDelete = () => {
    dispatch(removeContact(contact.id))
  }

  const handleEdit = () => {
    setEditing(true)
  }

  const handleCloseEdit = () => {
    setEditing(false)
  }

  return (
    <li>
      {editing ? (
        <EditContactForm contact={contact} onClose={handleCloseEdit} />
      ) : (
        <div>
          <strong>{contact.fullName}</strong>
          <p>Email: {contact.email}</p>
          <p>Telefone: {contact.phone}</p>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Remover</button>
        </div>
      )}
    </li>
  )
}

export default ContactItem
