import { useState } from 'react';
import { TbTrash } from 'react-icons/tb';
import { MdDone } from 'react-icons/md';
import styles from './Todo.module.css';

interface TodoProps {
    todoContent: string;
    onDeleteTodo: (todoContent: string) => void;
    onMarkTodoAsDone: (todoIsDone: boolean) => void;
}

export function Todo({todoContent, onDeleteTodo, onMarkTodoAsDone}: TodoProps) {
    const [todoIsDone, setTodoIsDone] = useState<boolean>(false);

    function handleTodoIsDone() {
        setTodoIsDone(!todoIsDone);
        onMarkTodoAsDone(!todoIsDone);
    }

    function handleDeleteTodo() {
        if(todoIsDone) {
            onMarkTodoAsDone(false)
        }
        onDeleteTodo(todoContent);
    }
    
    return(
        <div className={styles.todoBox}>
            <div
                className={todoIsDone ? styles.activeCheckbox : styles.checkbox} 
                onClick={handleTodoIsDone}
            >
                {todoIsDone && <MdDone />}
            </div>
            {todoIsDone ? <s>{todoContent}</s> : <p>{todoContent}</p>}
            <button onClick={handleDeleteTodo}>
                <TbTrash/>
            </button>
        </div>
    );
}