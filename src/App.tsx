import { Provider } from 'react-redux'
import store from './store'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import { AppContainer } from './styles/styles'
import { HeaderContact } from './styles/styles'

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <HeaderContact>Gerenciador de Contatos</HeaderContact>
        <ContactForm />
        <ContactList />
      </AppContainer>
    </Provider>
  )
}

export default App
