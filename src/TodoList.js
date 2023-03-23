import React from 'react';
import TodoListItem from './TodoListItem';

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

export default TodoList;