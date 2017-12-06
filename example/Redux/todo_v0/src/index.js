import { createStore } from 'redux'

function todo(state = [], action) {
  console.log('todo')
  switch (action.type) {
    case 'ADD_TODO':
      state.push(action.text)
      return state;
    default:
      return state
  }
}

let store = createStore(todo, [1111]);

store.subscribe(() =>
  console.log(store.getState())
)

// 打印初始状态
console.log('default store:',store.getState())

store.dispatch({
  type: 'ADD_TODO',
  text: 'Learn about actions V2'
});
console.log('update store:',store.getState())
