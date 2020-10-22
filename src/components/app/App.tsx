import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Header from "../header/Header";
import Login from "../login/Login";
import HeaderLogged from "../header_logged/HeaderLogged";
import CompanyListItem from "../company_list_item/CompanyListItem";
import CompanyList from "../company_lilst/CompanyList";

function App() {
  return (
    <div className="App">
      <HeaderLogged/>
      <CompanyList/>
    </div>
  );
}

export default App;
