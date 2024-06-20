// components/EditContactForm.tsx

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editContact } from '../actions/contactActions'
import { Contact } from '../reducers/contactReducer'

interface Props {
  contact: Contact
  onClose: () => void
}

const EditContactForm: React.FC<Props> = ({ contact, onClose }) => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState(contact.fullName)
  const [email, setEmail] = useState(contact.email)
  const [phone, setPhone] = useState(contact.phone)

  useEffect(() => {
    setFullName(contact.fullName)
    setEmail(contact.email)
    setPhone(contact.phone)
  }, [contact])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const updatedContact = {
      ...contact,
      fullName,
      email,
      phone
    }
    dispatch(editContact(updatedContact))
    onClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome Completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  )
}

export default EditContactForm
