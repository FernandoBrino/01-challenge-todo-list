import { Dispatch, SetStateAction } from 'react';
import { Todo } from './Todo';
import styles from './TodoList.module.css';

interface TodoListProps {
    todos: string[];
    setTodos: Dispatch<SetStateAction<string[]>>
}

export function TodoList({todos, setTodos}: TodoListProps) {

    function onDeleteTodo(todoContent: string) {
        const newTodoList = todos.filter(todo => {
            return todo !== todoContent;
        })
        setTodos(newTodoList);
    }

    return (
        <main className={styles.main}>
            <div className={styles.statusTodos}>
                <p className={styles.createdTodos}>
                    Tarefas Criadas
                    <span>{todos.length}</span>
                </p>
                <p className={styles.doneTodos}>
                    Concluida
                    <span>2 de 5</span>
                </p>
            </div>
            <div className={styles.allTodos}>
               {todos.map((todo => {
                    return <Todo todoContent={todo} key={todo} onDeleteTodo={onDeleteTodo}/>
               }))}
            </div>
        </main>
    );
}