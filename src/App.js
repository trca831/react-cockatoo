import React, {useState, useEffect} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

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

    // fetch(url, options)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     const todos = result.records.map((item) => ({
    //       id: item.id,
    //       title: item.fields.Title,
    //     }));

    //     setTodoList([...todos]);
    //     setIsLoading(false);
    //   });
  
    // new Promise ((resolve, reject) => 
    //   setTimeout (
    //     () => 
    //     resolve({
    //       data: {todoList: JSON.parse(localStorage.getItem("savedTodoList")) || 
    //     [], },
    //    }),
    //    2000)
    // )
    // .then ((result) => {
    //   setTodoList(result.data.todoList);
    //   setIsLoading(false);
    // });
   
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
    <>
    <h1>Todo List:</h1>
    <AddTodoForm onAddTodo = {addTodo} />
    {isLoading ? (
      <p>Loading...</p>
    ) : (  
    <TodoList todoList = {todoList} onRemoveTodo={removeTodo}/>
    )}
  </>
);
}

export default App;