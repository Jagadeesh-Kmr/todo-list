import {Switch, Route, Redirect} from 'react-router-dom'

import TaskManagement from './components/TaskManagement'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={TaskManagement} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App

/*
 onSubmitForm = event => {
    event.preventDefault()

    const {input} = this.state
    const newList = {
      id: uuidv4(),
      input,
    }
    if (input.length === 0) {
      this.setState({errorMSg: '*Required Details'})
    } else {
      this.setState({errorMSg: ''})
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newList],
      task: '',
    }))
  }

  if (storedTask.length === 0) {
      return []
    }
    return storedTask
*/
