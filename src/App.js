import React, {useState, useEffect} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {

  let [todoList, setTodoList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

 useEffect( () => {
    new Promise ((resolve, reject) => 
      setTimeout (
        () => 
        resolve({
          data: {todoList: JSON.parse(localStorage.getItem("savedTodoList")) || 
        [], },
       }),
       2000)
    ).then ((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
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