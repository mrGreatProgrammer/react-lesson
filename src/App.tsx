import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoTitle, setTodoTitle] = React.useState('');

  React.useEffect(()=>{
   const raw:any = localStorage.getItem('todos') || [];
   setTodos(JSON.parse(raw));
  },[]);

  React.useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="App">
      <div className="center">
        <img src={logo} alt="App-logo" />

      </div>
    </div>
  );
}

export default App;
