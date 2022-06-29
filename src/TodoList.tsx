import styles from './TodoList.module.css';

export function TodoList() {
    return (
        <main className={styles.main}>
            <div className={styles.statusTodos}>
                <p className={styles.createdTodos}>
                    Tarefas Criadas
                    <span>0</span>
                </p>
                <p className={styles.doneTodos}>
                    Concluida
                    <span>0</span>
                </p>
            </div>
            <div className={styles.allTodos}>
                <p>Lista aqui</p>
            </div>
        </main>
    );
}