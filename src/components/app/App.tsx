import React from 'react';
import { Route, Switch } from "react-router";
import { User } from "../../models/User";
import CompanyList from '../companies/company-list/CompanyList';
import Header from "../header/Header";
import InterviewsPage from '../interviews/interviews-page/InterviewsPage';
import Login from "../login/Login";
import Registration from "../register/Register";
import ReviewList from '../reviews/reviews-list/ReviewList';
import './App.css';
import ReviewContext from "../../utils/ReviewContext";
import {Review} from "../../models/Review";

const users: User[] = [];

const reviews: Review[] = [
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "not good bad work life balance low salary don't know why they write in Scala",
        id: 1,
        likes: 0
    },
    {
        companyName: "Kaspi",
        author: "Adlet",
        review: "blah blah blah blah blah blah blah blah blah blah blah blah ",
        id: 2,
        likes: 0
    },
    {
        companyName: "Amazon",
        author: "Sanzhar",
        review: "not good bad work life balance low salary bad managers wanting to PEP you",
        id: 3,
        likes: 0
    },
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "not good bad work life balance low salary don't know why they write in Scala",
        id: 4,
        likes: 0
    },
    {
        companyName: "ORION",
        author: "review by SANZHIK",
        review: "ne prihodite suda",
        id: 5,
        likes: 0
    }
];


function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/register">
          <Registration addUser={addUser}/>
      </Route>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <Route path='/companies' component={CompanyList} />
        <Route path='/interviews' component={InterviewsPage} />
        <ReviewContext.Provider value={reviews}>
        <Route path='/reviews' component={ReviewList} />
        </ReviewContext.Provider>
      </Switch>
    </div>
  );
  function addUser(user: User) {
    users.push(user);
    console.log('user added:' + user);
  }
}

export default App;
