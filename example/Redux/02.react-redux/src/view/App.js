import React from 'react'
import Footer from '../component/Footer'
import AddTodo from '../container/AddTodo'
import VisibleTodoList from '../container/VisibleTodoList'

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default App
