import styles from './CreateTodo.module.css';
import { FiPlusCircle } from 'react-icons/fi'

export function CreateTodoButton() {
    return(
        <form className={styles.createTodo}>
            <input type="text" placeholder='Adicione uma nova tarefa' className={styles.input}/>
            <button className={styles.button} type="submit">Criar<FiPlusCircle/></button>
        </form>
    );
}