import React from 'react';
import { Route, Switch } from "react-router";
import { Review } from "../../models/Review";
import { User } from "../../models/User";
import ColorContext from "../../utils/ColorContext";
import ReviewContext from "../../utils/ReviewContext";
import UserContext from '../../utils/UserContext';
import CompanyDetail from "../companies/company-detail/CompanyDetail";
import CompanyList from '../companies/company-list/CompanyList';
import Header from "../header/Header";
import InterviewsPage from '../interviews/interviews-page/InterviewsPage';
import Login from "../login/Login";
import Registration from "../register/Register";
import ReviewView from "../reviews/review-view/ReviewView";
import ReviewList from '../reviews/reviews-list/ReviewList';
import './App.css';

const users: User[] = [];

const reviews: Review[] = [
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "Bad work life balance low salary",
        id: 1,
        likes: 0,
        comments: ["agree", "so TRUE"]
    },
    {
        companyName: "Kaspi",
        author: "Adlet",
        review: "ne ponimau pochemu 6.5 milliardov stoit???",
        id: 2,
        likes: 0,
        comments: ["blah blah blaasdfadsfwergadfasdfasdfadfdfasdvqegqwef", "adfa;ldkfma;ldkm;aldskmfadf", "'adkf';lasdk;'zxckv;zlxckvz'"]
    },
    {
        companyName: "Amazon",
        author: "Sanzhar",
        review: "Bad work life balance low salary bad managers wanting to fire you",
        id: 3,
        likes: 0,
        comments: ["Aaaaaaaaaaaaaaaaaa!!!!!!", "NOOOOOOOOOOOOOOOOOOOOOOOO"]
    },
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "not good bad work life balance low salary don't know why they write in Scala",
        id: 4,
        likes: 0,
        comments: ["blah blah blah blah", "qweqweqwe"]
    },
    {
        companyName: "ORION",
        author: "review by SANZHIK",
        review: "ne prihodite suda",
        id: 5,
        likes: 0,
        comments: ["pochemu??", "ne och companiya"]
    }
];


function App() {
  return (
      <div className="App">
          <Header/>
          <Route path="/register">
              <Registration addUser={addUser}/>
          </Route>
          <UserContext.Provider value={'Alikhan'}>
          <ReviewContext.Provider value={reviews}>
          <ColorContext.Provider value = {'danger'}>
              <Switch>
                  <Route path='/companies' component={CompanyList} />
                  <Route path='/company_detail' component={CompanyDetail} />
                  <Route path='/interviews' component={InterviewsPage} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/' component={Login} />
                  <Route exact path='/reviews/' component={ReviewList} />
                  <Route path='/reviews/:id/' component={ReviewView} />
                  <Route exact path='/register' component={Registration}/>
              </Switch>
          </ColorContext.Provider>
          </ReviewContext.Provider>
          </UserContext.Provider>
      </div>
  );
  function addUser(user: User) {
    users.push(user);
    console.log('user added:' + user);
  }
}

export default App;
