import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from './Add';
import {Routes,Route, Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Counter from "./Counter";
import Button from "react-bootstrap/Button";
 


function App(){
  const [todos, changeTodos] = useState([

  ])

  const updateTodoItems = (postid, id, description, testpiece, counter) => {
    const item ={postid, id, description, testpiece, counter};
    localStorage.setItem("list", JSON.stringify([...todos, item]))
    changeTodos((state) => [...state, item])
  }

  const [counters, changeCounters] = useState ([{ id:0, count: 0}]);

  const buttonHandler = (id, increment) => {
    console.log("id",id);
    console.log("increment",increment);
    const updated = counters.map((counter) => {

      if (counter.id === id) {
        console.log("counter",counter)
        if (increment) {
          return { id, count: counter.count + 1 };
        } else {
          return { id, count: 0 };
        }
      }
      return counter;
      
    });
    console.log("updated",updated)
    changeCounters(updated); 
  };

  const generateCounters = () => {
    return counters.map((counter) => {
      console.log("Should Exist",counter);
      return <Counter count={counter.count} 
      key={counter.id} 
      id={counter.id} 
      buttonHandler={() => buttonHandler(counter.id, true)}
      resetCounter= {() => buttonHandler(counter.id, false)}
      />;
    });
  };
  const addCounter = () => {
    changeCounters((prev) => [...prev, { id: counters.length, count: 0 }]);
  };
  
useEffect( () => {
  const listContents = localStorage.getItem("list");
  changeTodos(JSON.parse(listContents) ||[])
  }, [])  

    return (
        <Container>

         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ChumsGroup</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/view">View Posts</Link>
            <Link className="nav-link" to="/add">Add Posts</Link>
          </Nav>
        </Container>
      </Navbar>

          <Routes>

            <Route path="/" element={
          <View todos={todos}/>
            } />

            <Route path="/view" element={
              <View todos={todos}/>
            } />

            <Route path="/add" element={
              <Add onSubmit={( postid,id, description, testpiece, counter) => updateTodoItems( postid,id, description, testpiece, counter)} />
            } />


          </Routes>
        </Container>
    );

}
export default App;
