import { combineReducers } from 'redux';

const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(list =>
        (Number(list.id) === Number(action.itemId))
          ? {...list, completed: !list.completed}
          : list
      );
    default:
      return state;
  }
}

const filter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const reducers = combineReducers({
  todo,
  filter,
})

export default reducers
