import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../actions/contactActions'
import {
  FormContact,
  InputContact,
  BtContact,
  StyleMask
} from '../styles/styles'

const ContactForm = () => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const newContact = {
      id: new Date().getTime().toString(),
      fullName,
      email,
      phone
    }
    dispatch(addContact(newContact))
    setFullName('')
    setEmail('')
    setPhone('')
  }

  return (
    <FormContact onSubmit={handleSubmit}>
      <InputContact
        type="text"
        placeholder="Nome Completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <InputContact
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <StyleMask
        mask="(99) 99999-9999"
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <BtContact type="submit">Adicionar Contato</BtContact>
    </FormContact>
  )
}

export default ContactForm
