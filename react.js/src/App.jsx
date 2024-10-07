import TodoInput from "./components/Todoinput"
import TodoList from "./components/TodoList"

function App() {
  let todos = [
    'Go to the Gym',
    'Eat more fruits and vegetables',
    'Pick the kids from school'
  ]

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App
