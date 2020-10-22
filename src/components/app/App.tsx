import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Header from "../header/Header";
import Login from "../login/Login";
import HeaderLogged from "../header_logged/HeaderLogged";

function App() {
  return (
    <div className="App">
      <HeaderLogged/>
      <Login/>
    </div>
  );
}

export default App;
