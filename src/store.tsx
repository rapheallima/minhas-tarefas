import { createStore, combineReducers } from 'redux'
import contactReducer, { ContactState } from './reducers/contactReducer'

export interface AppState {
  contacts: ContactState
}

const rootReducer = combineReducers({
  contacts: contactReducer
})

const store = createStore(rootReducer)

export default store
