import { useState } from 'react';
import { TbTrash } from 'react-icons/tb';
import { MdDone } from 'react-icons/md';
import styles from './Todo.module.css';

interface TodoProps {
    todoContent: string;
    onDeleteTodo: (todoContent: string) => void;
}

export function Todo({todoContent, onDeleteTodo}: TodoProps) {
    const [todoIsDone, setTodoIsDone] = useState<boolean>(false);

    function handleActiveCheckbox() {
        setTodoIsDone(!todoIsDone);
    }

    function handleDeleteTodo() {
        onDeleteTodo(todoContent);
    }
    
    return(
        <div className={styles.todoBox}>
            <div 
                className={todoIsDone ? styles.activeCheckbox : styles.checkbox} 
                onClick={handleActiveCheckbox}
            >
                {todoIsDone && <MdDone />}
            </div>
            <p>{todoContent}</p>
            <button onClick={handleDeleteTodo}>     
                <TbTrash/>  
            </button>
        </div>
    );
}