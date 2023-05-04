import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from "prop-types";

// import styles from "./AddTodoForm.module.css";

function AddTodoForm ({onAddTodo, setEditMode, editMode, onEditTodo, todoList}) {
    
    const [inputValue, setInputValue] = useState("");   

    function handleAddTodo (event) {
        event.preventDefault();
        onAddTodo({title: inputValue, id: Date.now()});
        setInputValue("");
        }

    function handleEditTodo (event) {
        event.preventDefault();
        onEditTodo({id: editMode.data.id, title: inputValue})
        setInputValue("");
        setEditMode({});
        }  

    return (
        <div>
        <form onSubmit = {editMode.status ? handleEditTodo : handleAddTodo}> 
        
        <InputWithLabel 
                setInputValue={setInputValue}
                inputValue={inputValue}
                editMode={editMode} >
            Task
        </InputWithLabel>
            
        {editMode.status ? 
            <button type="submit"> Save Changes</button> 
            : <button type="submit"> Add </button> }   
        </form>

        </div>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
}

export default AddTodoForm;