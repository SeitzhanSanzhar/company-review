import React from 'react';
import { Route, Switch } from "react-router";
import { User } from "../../models/User";
import CompanyList from '../company_list/CompanyList';
import HeaderLogged from "../header_logged/HeaderLogged";
import InterviewsList from '../interviews-list/InterviewsList';
import Login from "../login/Login";
import Registration from "../register/Register";
import './App.css';



const users: User[] = [];


function App() {
  return (
    <div className="App">
      <HeaderLogged/>
      <Route path="/register">
          <Registration addUser={addUser}/>
      </Route>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <Route path='/companies' component={CompanyList} />
        <Route path='/interviews' component={InterviewsList} />
      </Switch>
    </div>
  );
  function addUser(user: User) {
    users.push(user)
    console.log('user added:' + user);
  }
}

export default App;
