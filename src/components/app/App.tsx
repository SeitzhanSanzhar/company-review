import React from 'react';
import './App.css';
import HeaderLogged from "../header_logged/HeaderLogged";
import Registration from "../register/Register";
import {User} from "../../models/User";
import {Route} from "react-router";
import Login from "../login/Login";
import ReviewItem from "../review_item/ReviewItem";
import ReviewList from "../review_list/ReviewList";

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
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <ReviewList/>
    </div>
  );
  function addUser(user: User) {
      users.push(user);
      console.log('user added:' + user);
  }
}

export default App;
