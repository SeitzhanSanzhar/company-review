import React, { Profiler } from 'react';
import { Route, Switch } from "react-router";
import ColorContext from "../../contexts/ColorContext";
import ReviewContext from "../../contexts/ReviewContext";
import UserContext from '../../contexts/UserContext';
import { Review } from "../../models/Review";
import { User } from "../../models/User";
import Header from "../header/Header";
import InterviewsPageCompany from '../interviews/interviews-page-company/InterviewsPageCompany';
import Registration from "../register/Register";
import './App.css';

const CompanyDetail = React.lazy(() => import('../companies/company-detail/CompanyDetail'));
const CompanyList = React.lazy(() => import('../companies/company-list/CompanyList'));
const ReviewView = React.lazy(() => import("../reviews/review-view/ReviewView"));
const ReviewList = React.lazy(() => import('../reviews/reviews-list/ReviewList'));
const InterviewDetails = React.lazy(() => import('../interviews/interview-details/InterviewDetails'));
const InterviewsPage = React.lazy(() => import('../interviews/interviews-page/InterviewsPage'));
const Login = React.lazy(() => import("../login/Login"));

const users: User[] = [];

const reviews: Review[] = [
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "Bad work life balance low salary",
        id: 1,
        likes: 0,
        comments: ["agree", "so TRUE"],
        isLiked: false
    }
];

function App() {
    function onRenderCallback(
        id: string, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
        phase :  "mount" | "update", // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
        actualDuration : number, // время, затраченное на рендер зафиксированного обновления
        baseDuration: number, // предполагаемое время рендера всего поддерева без кеширования
        startTime: number, // когда React начал рендерить это обновление
        commitTime: number, // когда React зафиксировал это обновление
        interactions: any // Множество «взаимодействий» для данного обновления
    ) {
        const performanceData = [
            `id: ${id}`,
            `phase: ${phase}`,
            `actualDuration: ${actualDuration}`,
            `baseDuration: ${baseDuration}`,
            `startTime: ${startTime}`,
            `commitTime: ${commitTime}`,
            `interactions: ${JSON.stringify([...interactions])}`
        ].join("\n");
        // console.log(performanceData);
    }
  return (
      <div className="App">
        <Profiler id="Panel" onRender={onRenderCallback}>
            <Header/>
            <Route path="/register">
                <Registration addUser={addUser}/>
            </Route>
            <UserContext.Provider value={'Alikhan'}>
            <ReviewContext.Provider value={reviews}>
            <ColorContext.Provider value = {'danger'}>
                <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/interviews' component={InterviewsPage} />
                    <Route path='/interviews/:id/' component={InterviewDetails} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Login} />
                    <Route exact path='/reviews/' component={ReviewList} />
                    <Route path='/reviews/:id/' component={ReviewView} />
                    <Route path='/interviews_company/:companyName/' component={InterviewsPageCompany} />
                    <Route path='/reviews/:id/' component={ReviewView} />
                    <Route path='/company-detail/:id/' component={CompanyDetail} />
                    <Route path='/companies' component={CompanyList} />
                </Switch>
                </React.Suspense>
            </ColorContext.Provider>
            </ReviewContext.Provider>
            </UserContext.Provider>
        </Profiler>
      </div>
  );
  function addUser(user: User) {
    users.push(user);
    console.log('user added:' + user);
  }
}

export default App;
