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
    const {todoLists, deleteList, emptyInputValue} = this.props
    const {inputValue, id} = todoLists

    const onRemoveList = () => {
      deleteList(id)
    }

    const inputLen = inputValue.length === 0

    const {onSubmit} = this.state
    const inputClassName = onSubmit ? 'task-line-through' : 'task'

    return (
      <>
        {inputLen ? (
          <p className="empty-list-heading">{emptyInputValue}</p>
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
