import { useState, useEffect } from "react"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const[todoValue, setTodoValue] = useState('')

  function persistData() {
    localStorage.setItem('todos', JSON.stringify( todos))
  }
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue}
      handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
