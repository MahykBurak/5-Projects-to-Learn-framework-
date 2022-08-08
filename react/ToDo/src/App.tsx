import { useState } from 'react'
import AddTodoForm from './components/addTodoForm'
import TodoList from './components/todoList'
import { todo } from './lib/types'

function App() {
  const [todoList, setTodoList] = useState<todo[]>([])
  return (
    <main className="container parent">
      <TodoList todoList={todoList} />
      <AddTodoForm setTodo={setTodoList} Todos={todoList} />
    </main>
  )
}

export default App
