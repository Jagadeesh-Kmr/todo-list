import TaskManagement from './components/TaskManagement'

import './App.css'

// Replace your code here

const App = () => (
  <>
    <TaskManagement />
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
*/
