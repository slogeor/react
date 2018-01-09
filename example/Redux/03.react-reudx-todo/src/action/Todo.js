/**
 * action 函数
 */

let nextTodoId = 0;

// 添加todo
const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
})

// 过滤器
const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

// 切换
const toggleTodo = (itemId) => ({
  type: 'TOGGLE_TODO',
  itemId,
})

export default {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
}
