import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TodoLists from '../TodoLists'

import './index.css'

class TaskManagement extends Component {
  state = {
    inputValue: '',
    todoList: [],
    errorMSg: '',
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {inputValue} = this.state
    const newList = {
      id: uuidv4(),
      inputValue,
    }
    if (inputValue.length === 0) {
      this.setState({errorMSg: '*Required Details'})
    } else {
      this.setState({errorMSg: ''})
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newList],
      inputValue: '',
    }))
  }

  onChangeInputValue = e => {
    this.setState({inputValue: e.target.value})
  }

  renderInputContainer = () => {
    const {inputValue, errorMSg} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <input
          type="text"
          className="input"
          onChange={this.onChangeInputValue}
          value={inputValue}
        />
        <p>{errorMSg}</p>
        <button type="submit" className="button">
          Add Task
        </button>
      </form>
    )
  }

  renderTodoLists = () => {
    const {todoList} = this.state

    return (
      <ul className="todo-ul">
        {todoList.map(eachData => (
          <TodoLists key={eachData.id} todoLists={eachData} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <div className="task-management-container">
          <h1 className="task-management-h1">Task Management</h1>
          <div className="input-container">{this.renderInputContainer()}</div>
          <div>{this.renderTodoLists()}</div>
        </div>
      </>
    )
  }
}

export default TaskManagement

/*
 renderTodoLists = () => {
    const {todoList} = this.state

    return (
      <ul className="todo-ul">
        {todoList.map(eachData => (
          <TodoLists key={eachData.id} todoLists={eachData} />
        ))}
      </ul>
    )
  }
*/
