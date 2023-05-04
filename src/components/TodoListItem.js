import React from 'react';
import styles from "./TodoListItem.module.css";
import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import { PropTypes } from "prop-types";

function TodoListItem ({todo, onRemoveTodo, setEditMode}){

    return (
        <li className={styles.todoList}> 

            {todo.fields?.Title?  todo.fields.Title : todo.title }
            
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
}

export default TodoListItem;