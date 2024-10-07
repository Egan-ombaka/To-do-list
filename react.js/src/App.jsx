import { useState } from "react"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([
    'Go to the Gym',
    'Eat more fruits and vegetables',
    'Pick the kids from school'
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} />
    </>
  )
}

export default App
