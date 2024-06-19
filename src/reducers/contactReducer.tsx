export interface Contact {
  id: string
  fullName: string
  email: string
  phone: string
}

export interface ContactState {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: []
}

const contactReducer = (state = initialState, action: any): ContactState => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        )
      }
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        )
      }
    default:
      return state
  }
}

export default contactReducer
