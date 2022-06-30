import { Todo } from './Todo';
import styles from './TodoList.module.css';

export function TodoList() {
    return (
        <main className={styles.main}>
            <div className={styles.statusTodos}>
                <p className={styles.createdTodos}>
                    Tarefas Criadas
                    <span>5</span>
                </p>
                <p className={styles.doneTodos}>
                    Concluida
                    <span>2 de 5</span>
                </p>
            </div>
            <div className={styles.allTodos}>
                <Todo />
            </div>
        </main>
    );
}