import { Contact } from '../reducers/contactReducer'

export const addContact = (contact: {
  id: string
  fullName: string
  email: string
  phone: string
}) => ({
  type: 'ADD_CONTACT',
  payload: contact
})

export const removeContact = (id: string) => ({
  type: 'REMOVE_CONTACT',
  payload: id
})

export const editContact = (contact: Contact) => ({
  type: 'EDIT_CONTACT',
  payload: contact
})
