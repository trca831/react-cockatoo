import React from 'react';
import TodoListItem from './TodoListItem';
import { PropTypes } from "prop-types";

import styled from "./TodoList.css";

function TodoList ({todoList, onRemoveTodo}){
    return (
      <div>
        <ul className ={styled.items}>
        {todoList.map((todo) => (
            <TodoListItem 
                key = {todo.id} 
                todo = {todo} 
                onRemoveTodo = {onRemoveTodo}/>
            ))}
        </ul>
        </div>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array,
	onRemoveTodo: PropTypes.func,
}

export default TodoList;