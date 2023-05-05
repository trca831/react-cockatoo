import React, {useState} from 'react';
import styles from "./TodoListItem.module.css";
import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import { PropTypes } from "prop-types";

function TodoListItem ({todo, onRemoveTodo, setEditMode}){

    const [isChecked, setIsChecked] = useState(false);

    return (
        <li className={styles.todoList}> 

            <input
            className={styles.checkbox}
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            />

            <span style={{textDecoration: isChecked ? "line-through" : "none"}}>    
            {todo.fields?.Title?  todo.fields.Title : todo.title }
            </span>
            <button type="button" onClick={() => 
            onRemoveTodo(todo.id)}>  <BsTrashFill/>     </button>

            <button type="button" onClick={() =>
            setEditMode({status:true, data:todo})}> <BsPencilFill/></button>  
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
	onRemoveTodo: PropTypes.func,
    setEditMode: PropTypes.func
}

export default TodoListItem;