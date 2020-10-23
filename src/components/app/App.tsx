import React from 'react';
import { Route, Switch } from "react-router";
import { User } from "../../models/User";
import CompanyList from '../companies/company-list/CompanyList';
import HeaderLogged from "../header/HeaderLogged";
import InterviewsPage from '../interviews/interviews-page/InterviewsPage';
import Login from "../login/Login";
import Registration from "../register/Register";
import ReviewList from '../reviews/reviews-list/ReviewList';
import './App.css';
import {CompanyContext} from "../../contexts/CompanyContext";

const users: User[] = [];


function App() {
  return (
    <CompanyContext.Provider value={{companyData: null}}>
      <div className="App">
        <HeaderLogged/>
        <Route path="/register">
            <Registration addUser={addUser}/>
        </Route>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <Route path='/companies' component={CompanyList} />
          <Route path='/interviews' component={InterviewsPage} />
          <Route path='/reviews' component={ReviewList} />
        </Switch>
      </div>
    </CompanyContext.Provider>
  );
  function addUser(user: User) {
    users.push(user)
    console.log('user added:' + user);
  }
}

export default App;
