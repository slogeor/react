import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO } from './action'

function todos(state = [], action) {
  console.log('todos')
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function todo(state = [], action) {
  console.log('todo')
  switch (action.type) {
    case ADD_TODO:
      return action
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  todo,
})

export default todoApp
