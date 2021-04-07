import React  from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Users from "./components/user-list.component";
import EditUser from "./components/edit-user.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/edit/:id"  component={EditExercise}/>
      <Route path="/create"  component={CreateExercise}/>
      <Route path="/user"  component={CreateUser}/>
      <Route path="/allusers"  component={Users}/>
      <Route path="/editusers/:id"  component={EditUser}/>
      

    </Router>
    
  );
}

export default App;
