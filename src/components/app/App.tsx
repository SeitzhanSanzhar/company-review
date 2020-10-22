import React from 'react';
import './App.css';
import HeaderLogged from "../header_logged/HeaderLogged";
import Registration from "../register/Register";
import {User} from "../../models/User";
import {Route} from "react-router";
import Login from "../login/Login";

const users: User[] = [];

function App() {
  return (
    <div className="App">
      <HeaderLogged/>
        <Route path="/register">
            <Registration adduser={addUser}/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
    </div>
  );
  function addUser(user: User) {
      console.log(user);
  }
}

export default App;
