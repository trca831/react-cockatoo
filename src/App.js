import React, {useState, useEffect} from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import TodaysDate from './TodaysDate';
import Greeting from './Greeting';
import MySchedule from './MySchedule';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import "./App.css";
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`;
// const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;


function App() {

  let [editMode, setEditMode] = useState({status:false, data:{}});
  
  let [todoList, setTodoList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [ascending, setAscending] = useState(true);

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

      ascending 
      ?  result.records.sort((objectA, objectB) => {
        if (objectA.fields.Title < objectB.fields.Title) {
          return -1;
        } else if (objectA.fields.Title === objectB.fields.Title) {
          return 0;
        } else {
          return 1;
        }
      })
      :
      result.records.sort((objectA, objectB) => {
        if (objectA.fields.Title < objectB.fields.Title) {
          return 1;
        } else if (objectA.fields.Title === objectB.fields.Title) {
          return 0;
        } else {
          return -1;
        }
      })

        // console.log(result.records);
        setTodoList(result.records);
        setIsLoading(false);
    })
    .catch((error) => console.log(error));
  }, [ascending]);

 useEffect(() => {
    if (!isLoading){
    localStorage.setItem("savedTodoList", 
    JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  

  function removeTodo (id) {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    })
    .then(response => response.json())
    .then(data => {
  
    const removeItem = todoList.filter((todo) =>
      todo.id !== id);
  
    setTodoList(removeItem);
    })
    
  }

  function editTodo (newTodo){
    fetch(url + `${newTodo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      },
      body: JSON.stringify({
        fields: {
          Title: newTodo.title,
        },
      }),
    })
    .then(response => response.json())
    .then(data => {
  setTodoList(() => { 
    return todoList.map(todo => {
      if (todo.id === data.id){
        return data;
      } else {
        return todo;
      }
    })
  }) 
  console.log(data);
  
})
}
  
  
  function addTodo (newTodo){
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      },
      body: JSON.stringify({
        fields: {
          Title: newTodo.title,
        },
      }),
    })
    .then(response => response.json())
    .then(data => {
  
      const newTodo = {
      id: data.id,
      title: data.fields.Title
    };
    
    setTodoList([...todoList, newTodo]);
  })
  }
  
  console.log(editMode);

    return (
      <BrowserRouter>
      <>
      <Navbar />
      <br/>
      
        <Routes>
          <Route path='/' element={
              <>
              <TodaysDate/>
              <Greeting />
              <h1 className="heading">Todo List:</h1>
              <AddTodoForm 
                onAddTodo = {addTodo}
                editMode={editMode}
                onEditTodo={editTodo}
                setEditMode={setEditMode} />
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (  
                  <TodoList 
                      todoList = {todoList} 
                      onRemoveTodo={removeTodo}
                      setEditMode = {setEditMode}
                      onEditedTodo = {editTodo}
                      />
                  )}
            <button type="button" 
            onClick={() => setAscending(!ascending)}> 
            Change </button>
              </>

          } exact/>
          <Route path="mySchedule" element={<MySchedule/>} />
        </Routes>
       </>   
       </BrowserRouter>
    );
}

export default App;