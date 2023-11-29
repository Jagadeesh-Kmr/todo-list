import {Component} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class TodoLists extends Component {
  state = {
    onSubmit: false,
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      onSubmit: !prevState.onSubmit,
    }))
  }

  render() {
    const {todoLists, deleteList} = this.props
    const {inputValue, id} = todoLists

    const onRemoveList = () => {
      deleteList(id)
    }

    const {onSubmit} = this.state
    const inputClassName = onSubmit ? 'task-line-through' : 'task'

    return (
      <>
        {inputValue.length === 0 ? (
          <div className="empty-list-container">
            <h1 className="empty-list-heading">No Tasks Yet!</h1>
          </div>
        ) : (
          <li className="todo-li">
            <div className="input-value-container">
              <input
                type="checkbox"
                className="check-box-input"
                onClick={this.onClickCheckbox}
              />
              <p className={inputClassName}>{inputValue}</p>
            </div>
            <div className="buttons-container">
              <button
                className="delete-button"
                type="button"
                onClick={onRemoveList}
              >
                <AiFillCloseCircle color="#ffffff" size={20} />
              </button>
            </div>
          </li>
        )}
      </>
    )
  }
}

export default TodoLists
