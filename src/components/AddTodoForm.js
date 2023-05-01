import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from "prop-types";

// import styles from "./AddTodoForm.module.css";

function AddTodoForm ({onAddTodo, setEditMode, editMode, onEditTodo, todoList}) {
    
    const [inputValue, setInputValue] = useState(""); 
    // const [todoTitle, setTodoTitle] = useState([]);

    // const myadd = {
    //   backgroundColor: "DodgerBlue",
    //   color: "white",
    //   padding: "5px",
    //   fontFamily: "Verdana, sans-serif",
    //   fontSize: "20px",
    //   borderRadius: "15px",
    //   border: "2px solid",
    // //   need to use camelCase here
    // };

    // function handleTitleChange (event) {
    //     const newTodoTitle = event.target.value;
    //     setTodoTitle(newTodoTitle); 
    //     console.log(newTodoTitle);
    // }

    // function handleAddTodo (){
    //     console.log(todoTitle);
    //     onAddTodo( {title: todoTitle, id: Date.now() } ); 
    //     setTodoTitle("");
    // }

    // function handleEditTodo (event) {
    //     event.preventDefault();
    //     todoList.map((todo) => {
    //         if (todo.id === editMode.data.id){
    //             return {id: todo.id, fields: {Title: todoTitle}}
    //         } else {
    //             return todo
    //         }
    //     })
    //     console.log(todoTitle);
    //     setTodoTitle(" ");
    //         }    

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
        {/* <form onSubmit = {handleAddTodo}> */}
        <form onSubmit = {editMode.status ? handleEditTodo : handleAddTodo}> 
        
        <InputWithLabel 
                setInputValue={setInputValue}
                inputValue={inputValue}
                editMode={editMode}
                // todoTitle = {todoTitle} 
                // handleTitleChange = {handleTitleChange}
                // isFocused = {true}  
                >
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