import React from 'react';
import style from "./TodoListItem.module.css";
import { PropTypes } from "prop-types";

function TodoListItem ({todo, onRemoveTodo}){

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
        <>
        <li className={style.ListItem}> 
            {" "} {todo.fields.Title} {" "}
            <button style={removeit} 
                    type="button" 
                    onClick={() => onRemoveTodo(todo.id)}>
                Delete
            </button>
        </li>
        </>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
	onRemoveTodo: PropTypes.func,
}

export default TodoListItem;