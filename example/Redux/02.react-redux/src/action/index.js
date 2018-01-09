// action 函数

let nextTodoId = 0

// 添加todo
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

// 设置过滤器
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

// 切换
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
