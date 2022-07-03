import styles from './CreateTodo.module.css';
import { FiPlusCircle } from 'react-icons/fi'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface CreateTodoButtonProps {
    todos: string[];
    setTodos: Dispatch<SetStateAction<string[]>>
}

export function CreateTodoButton({setTodos, todos}: CreateTodoButtonProps) {
    const [newTodoText, setNewTodoText] = useState('');
    
    function handleCreateNewTodo(event: FormEvent) {
        event.preventDefault();
        setTodos([...todos, newTodoText])
        setNewTodoText('');
    }

    function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTodoText(event.target.value);
    }

    return(
        <form className={styles.createTodo} onSubmit={handleCreateNewTodo}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
                className={styles.input} 
                onChange={handleNewTodoChange}
                value={newTodoText}
                required
            />
            <button className={styles.button} type="submit">Criar<FiPlusCircle/></button>
        </form>
    );
}