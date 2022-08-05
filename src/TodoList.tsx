import { Dispatch, SetStateAction, useState } from 'react';
import { Todo } from './Todo';
import styles from './TodoList.module.css';
import noTodosLogo from '../assets/no-todos-logo.svg';

interface TodoListProps {
    todos: string[];
    setTodos: Dispatch<SetStateAction<string[]>>
}

export function TodoList({todos, setTodos}: TodoListProps) {
    const [numberTodosDoned, setNumberTodosDoned] = useState<number>(0);
    const numberOfTodos = todos.length;

    function onDeleteTodo(todoContent: string) {
        const newTodoList = todos.filter(todo => {
            return todo !== todoContent;
        })
        setTodos(newTodoList);
        
    }

    function onMarkTodoAsDone(todoIsDone: boolean) {
        if(todoIsDone) {
            setNumberTodosDoned((state) => state + 1);
        } else {
            setNumberTodosDoned((state) => state - 1);
        }  
    }

    return (
        <main className={styles.main}>
            <div className={styles.statusTodos}>
                <p className={styles.createdTodos}>
                    Tarefas Criadas
                    <span>{numberOfTodos}</span>
                </p>
                <p className={styles.doneTodos}>
                    Concluida
                    <span>{numberTodosDoned} de {numberOfTodos}</span>
                </p>
            </div>
            
                {todos.length ?
                    <div className={styles.todosList}>
                        {todos.map((todo => (
                            <Todo 
                                todoContent={todo} 
                                key={todo} 
                                onDeleteTodo={onDeleteTodo} 
                                onMarkTodoAsDone={onMarkTodoAsDone}
                            />
                        )))}
                    </div> : 
                    <div className={styles.noTodosCreated}>
                        <img src={noTodosLogo} alt="logotipo, nenhum todo criado" />
                        <b>Você ainda não tem tarefas cadastradas</b>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                   
                }
                
        </main>
    );
}