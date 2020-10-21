import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Login from "../login/Login";
import HeaderLogged from "../header_logged/HeaderLogged";
import {
  Switch,
  useLocation,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderLogged/>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
