import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import DisplayPost from "./components/Social/DisplayPost";
import MyReceipes from './components/Receipes/MyReceipes'
import AddReceipe from './components/Receipes/AddReceipe';
import UpdateReceipe from './components/Receipes/UpdateReceipe';
import MyTrainings from "./components/Trainings/MyTrainings";
import Profile from "./components/Profile/Profile";
import Receipe from './components/Receipes/Receipe';
import Training from './components/Trainings/Training';
import DoExercise from './components/Trainings/DoExercise';

function App() {
  const [userConnected, setUserConnected] = useState<boolean>(false)

  useEffect(() => {
      const currentUserId:string | null  = (localStorage.getItem("id") !== "") ? localStorage.getItem("id") : null;
      setUserConnected(currentUserId !== null);
      console.log(currentUserId)
  }, [])

  return (
    <div className="App">
      <Router>
        {!userConnected ? (
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
            </Switch>
        ) : (
        <Switch>
            <Route path="/news" component={DisplayPost}/>
            <Route path="/receipes" component={MyReceipes}/>
            <Route path="/addReceipe" component={AddReceipe}/>
            <Route path="/receipe/:id" exact component={Receipe}/>
            <Route path="/receipe/update/:id" component={UpdateReceipe}/>
            <Route path="/trainings" component={MyTrainings}/>
            <Route path="/training/:id" component={Training}/>
            {/*<Route path="/open_training/:id_program" component={OpenTraining}/>*/}
            <Route path="/do_exercise/:id" component={DoExercise}/>
            <Route path="/account" component={Profile}/>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
