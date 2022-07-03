import './global.css';
import { Header } from './Header';
import { CreateTodoButton } from './CreateTodo'
import { TodoList } from './TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <Header/>
      <CreateTodoButton setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>   
  );
}

export default App
