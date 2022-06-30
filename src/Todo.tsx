import { TbTrash } from 'react-icons/tb';
import styles from './Todo.module.css';

export function Todo() {
    return(
        <div className={styles.todoBox}>
            <input type="checkbox" />
            <p>Terminar de desenvolver aplicação de todos do Ignite.</p>
            <TbTrash/>
        </div>
    );
}