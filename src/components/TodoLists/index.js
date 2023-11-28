import './index.css'

import {Component} from 'react'

class TodoLists extends Component {
  render() {
    const {todoLists} = this.props
    const {inputValue} = todoLists

    return (
      <>
        <li className="todo-li">
          <p className="task">{inputValue}</p>
        </li>
      </>
    )
  }
}

export default TodoLists
