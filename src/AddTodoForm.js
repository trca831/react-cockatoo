import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';

// import styles from "./AddTodoForm.module.css";

function AddTodoForm ({onAddTodo}) {
    
    const [todoTitle, setTodoTitle] = useState([]);

    const myadd = {
      backgroundColor: "DodgerBlue",
      color: "white",
      padding: "5px",
      fontFamily: "Verdana, sans-serif",
      fontSize: "20px",
      borderRadius: "15px",
      border: "2px solid",
    //   need to use camelCase here
    };

    function handleTitleChange (event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle); 
        console.log(newTodoTitle);
    }

    function handleAddTodo (){
        console.log(todoTitle);
        onAddTodo( {title: todoTitle, id: Date.now() } ); 
        setTodoTitle("");
    }

    return (
        <form onSubmit = {handleAddTodo}>
        
        <InputWithLabel 
                todoTitle = {todoTitle} 
                handleTitleChange = {handleTitleChange}
                isFocused = {true}  >
                            Title
        </InputWithLabel>
            <button style={myadd} type="submit"> Add </button>
        </form>
    )
}

export default AddTodoForm;