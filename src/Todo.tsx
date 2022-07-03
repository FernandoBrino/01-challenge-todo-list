import { useState } from 'react';
import { TbTrash } from 'react-icons/tb';
import { MdDone } from 'react-icons/md';
import styles from './Todo.module.css';

export function Todo() {
    const [checkboxIsActive, setCheckboxIsActive] = useState<boolean>(false);

    function handleActiveCheckbox() {
        setCheckboxIsActive(!checkboxIsActive);
    }
    
    return(
        <div className={styles.todoBox}>
            <div 
                className={checkboxIsActive ? styles.activeCheckbox : styles.checkbox} 
                onClick={handleActiveCheckbox}
            >
                {checkboxIsActive && <MdDone />}
            </div>
            <p>Terminar de desenvolver aplicação de todos do Ignite.</p>
            <TbTrash/>
        </div>
    );
}