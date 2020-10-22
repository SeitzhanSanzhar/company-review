import React from 'react';
import './App.css';
import HeaderLogged from "../header_logged/HeaderLogged";

import CompanyListItem from "../company_list_item/CompanyListItem";
import CompanyList from "../company_list/CompanyList";

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
        <Route path="/company_list">
          <CompanyList/>
        </Route>
    </div>
  );
  function addUser(user: User) {
      console.log(user);
  }
}

export default App;
