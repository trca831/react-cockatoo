import React from 'react';
import TodoListItem from './TodoListItem';
import { PropTypes } from "prop-types";

import styled from "./TodoList.css";

function TodoList ({todoList, onRemoveTodo, onEditedTodo, setEditMode}){
    return (
      
        <ul style={{listStyle: "none"}}>
        {todoList.map((todo) => (
            <TodoListItem 
                key = {todo.id} 
                todo = {todo} 
                setEditMode={setEditMode}
                onRemoveTodo = {onRemoveTodo}
                onEditedTodo={onEditedTodo}
                />
            ))}
        </ul>
        
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array,
	onRemoveTodo: PropTypes.func,
}

export default TodoList;