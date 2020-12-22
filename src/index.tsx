import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import ErrorBoundary from "./error_boundaries/ErrorBoundary";
import './index.css';
import * as serviceWorker from './serviceWorker';


import reducer from "./store/reducer"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import {CompanyAction, CompanyState, DispatchType} from "./models/Company";

const store: Store<CompanyState, CompanyAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App/>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
