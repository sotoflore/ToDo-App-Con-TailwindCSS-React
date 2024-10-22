import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id:1, title: "Tarea 1", completed: true},
  { id:2, title: "Tarea 2", completed: true},
  { id:3, title: "Tarea 3", completed: false},
  { id:4, title: "Tarea 4", completed: false},
  { id:5, title: "Tarea 5", completed: false},
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(), 
      title: title.trim(), 
      completed:false,
    }
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !==id));
  };

  const updateTodo = (id) => {
    setTodos(todos.map(
      todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  };

  const computedItemLeft = todos.filter( (todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState('all');

  const changeFilter = (filter) => setFilter(filter)
  
  const filterTodos = () =>{
     switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
     }
  };

  return (
    <div className="bg-gray-300 shadow-lg px-20 w-full bg-cover bg-center bg-[url('./assets/images/bg-mobile-light.jpg')] min-h-screen  bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
        <Header />

        <main className="container mx-auto mt-8">
          <TodoCreate createTodo={createTodo} />
          <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
          <TodoComputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted} />
          <TodoFilter changeFilter={changeFilter} filter={filter}/>
        </main>

        <footer className="text-center mt-8 dark:text-white">
           Copyright 2023
        </footer>
        
    </div>
  );
};
export default App;