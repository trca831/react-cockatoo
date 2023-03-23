import React from 'react';
// import style from "./TodoListItem.module.css";

function TodoListItem ({todo, onRemoveTodo}){

    const removeit = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    return (
        <li className={style.ListItem}>{todo.fields.Title}
            <button style={removeit} type="button" onClick={() => onRemoveTodo(todo)}>
                Remove
            </button>
        </li>
    )
}

export default TodoListItem;