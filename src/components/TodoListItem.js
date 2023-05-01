import React from 'react';
import style from "./TodoListItem.module.css";
import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import { PropTypes } from "prop-types";

function TodoListItem ({todo, onRemoveTodo, onEditedTodo, setEditMode}){

    const removeit = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        fontFamily: "Arial",
        fontSize: "10px",
        borderRadius: "20px"

    //     backgroundColor: "DodgerBlue",
    //   color: "white",
    //   padding: "5px",
    //   fontFamily: "Verdana, sans-serif",
    //   fontSize: "20px",
    //   borderRadius: "15px",
    //   border: "2px solid",
    };

    return (
        <li> 
            <input type="checkbox" id="todo.id" ></input>  
            {todo.fields?.Title?  todo.fields.Title : todo.title }
            
            <button type="button" onClick={() => 
            onRemoveTodo(todo.id)}>  <BsTrashFill/>     </button>

            <button type="button" onClick={() =>
            setEditMode({status:true, data:todo})}> <BsPencilFill/></button>  
            </li>
        // <>
        // <li className={style.ListItem}> 
        //     {" "} {todo.fields.Title} {" "}
        //     <button style={removeit} 
        //             type="button" 
        //             onClick={() => onRemoveTodo(todo.id)}>
        //         Delete
        //     </button>
        // </li>
        // </>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
	onRemoveTodo: PropTypes.func,
}

export default TodoListItem;