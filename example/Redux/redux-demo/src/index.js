import { createStore } from 'redux'

// action 函数
function todo(state = [], action) {
  console.log('todo action:', action)
  switch (action.type) {
    case 'ADD_TODO':
      state.push(action.text)
      return state;
    default:
      return state
  }
}

// 初始化store
let store = createStore(todo, ['default store']);

// 监听 store 的变化
store.subscribe(() =>
  console.log('store subscribe',store.getState())
)

// 打印初始状态
console.log('default store:',store.getState())

// 触发action
store.dispatch({
  type: 'ADD_TODO',
  text: 'Learn React'
});

// 触发action
store.dispatch({
  type: 'ADD_TODO',
  text: 'Learn Redux'
});
