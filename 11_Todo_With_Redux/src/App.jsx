
import { Provider } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { store } from './app/store'

function App() {
  

  return (
    <Provider store={store}>
      <h1>Tod With Redux..</h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
