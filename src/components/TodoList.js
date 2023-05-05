import React from 'react';
import TodoListItem from './TodoListItem';
import { PropTypes } from "prop-types";

function TodoList ({todoList, onRemoveTodo, setEditMode}){
    return (
      
        <ul style={{listStyle: "none"}}>
        {todoList.map((todo) => (
            <TodoListItem 
                key = {todo.id} 
                todo = {todo} 
                setEditMode={setEditMode}
                onRemoveTodo = {onRemoveTodo}
                />
            ))}
        </ul>
        
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array,
	onRemoveTodo: PropTypes.func,
    setEditMode: PropTypes.func
}

export default TodoList;