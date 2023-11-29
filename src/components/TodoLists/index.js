import {Component} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class TodoLists extends Component {
  render() {
    const {todoLists, deleteList} = this.props

    const {inputValue, id} = todoLists

    const onRemoveCartItem = () => {
      deleteList(id)
    }

    return (
      <>
        <li className="todo-li">
          <p className="task">{inputValue}</p>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      </>
    )
  }
}

export default TodoLists
