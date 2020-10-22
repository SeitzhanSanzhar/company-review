import React from 'react';
import { Route, Switch } from "react-router";

import { User } from "../../models/User";
import CompanyList from '../company_list/CompanyList';
import HeaderLogged from "../header_logged/HeaderLogged";
import Login from "../login/Login";
import Registration from "../register/Register";

import './App.css';

const users: User[] = [];


function App() {
  return (
    <div className="App">
      <HeaderLogged />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Registration} />
        <Route path='/companies' component={CompanyList} />
      </Switch>
    </div>
  );
}

export default App;
