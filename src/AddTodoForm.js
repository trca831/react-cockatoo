import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';


function AddTodoForm ({onAddTodo}) {
    
    const [todoTitle, setTodoTitle] = useState([]);

    function handleTitleChange (event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle); 
        console.log(newTodoTitle);
    }

    function handleAddTodo (){
        // event.preventDefault();
        console.log(todoTitle);
        onAddTodo( {title: todoTitle, id: Date.now() } ); 
        setTodoTitle("");
    }

    return (
        <form onSubmit = {handleAddTodo}>
        
        <InputWithLabel 
                todoTitle = {todoTitle} 
                handleTitleChange = {handleTitleChange}
                // isFocused = {true}  
                >
                            Title
        </InputWithLabel>
            <button type="submit"> Add</button>
        </form>
    )
}

export default AddTodoForm;