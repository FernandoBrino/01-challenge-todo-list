import './global.css';
import styles from './App.module.css';
import { Header } from './Header';
import { CreateTodoButton } from './CreateTodo'
import { TodoList } from './TodoList';

function App() {
  return (
    <>
      <Header/>
      <CreateTodoButton/>
      <TodoList/>
    </>   
  );
}

export default App
