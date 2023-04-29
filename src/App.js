import React, {useState, useEffect} from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`;


function App() {

  let [todoList, setTodoList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

 useEffect( () => {
  const options = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
        console.log(result.records);
        setTodoList(result.records);
        setIsLoading(false);
    })
    .catch((error) => console.log(error));
   
  }, []);

 useEffect(() => {
    if (!isLoading){
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  

  const addTodo = (newTodo) => {
    setTodoList((previousTodoList) => 
    [...previousTodoList, newTodo]);
  };

  const removeTodo =  (id) => {
    setTodoList((handleRemove) =>
      handleRemove.filter((todo) => id.title !== todo.title));
  };

    return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={

              <>
              <h1 className="heading">Todo List:</h1>
              <AddTodoForm onAddTodo = {addTodo} />
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (  
                  <TodoList todoList = {todoList} onRemoveTodo={removeTodo}/>
                  )}
              </>

          } exact/>
          <Route path='/new' element={<h1>New Todo List</h1>} />
        </Routes>
      </BrowserRouter>

    )

}

export default App;