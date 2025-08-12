
import './App.css'
import TodoForm from './components/TodoForm'
import { todosContext } from './utils/todosContext'
import TodoList from './components/TodosList'
import useTodos from './utils/useTodos'


function App() {
 

   const { todos, dispatch } = useTodos();

  return (
    <todosContext.Provider value={{ todos, dispatch }}>
      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
        <h1>My To-Do List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </todosContext.Provider>
  );
}

export default App
