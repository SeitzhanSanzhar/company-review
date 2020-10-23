import React from 'react';
import { Route, Switch } from "react-router";

import { User } from "../../models/User";
import CompanyList from '../company_list/CompanyList';
import HeaderLogged from "../header_logged/HeaderLogged";
import Login from "../login/Login";
import Registration from "../register/Register";

import './App.css';
import ReviewList from "../review_list/ReviewList";

const users: User[] = [];


function App() {
  return (
    <div className="App">
      <HeaderLogged/>
        <Route path="/register">
            <Registration addUser={addUser}/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/company_list">
          <CompanyList/>
        </Route>
        <Route path="/reviews">
            <ReviewList/>
        </Route>
      <HeaderLogged />
    </div>
  );
  function addUser(user: User) {
    users.push(user)
    console.log('user added:' + user);
  }
}

export default App;
