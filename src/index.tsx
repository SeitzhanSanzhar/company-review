import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import ErrorBoundary from "./error_boundaries/ErrorBoundary";
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <ErrorBoundary>
    <App/>
    </ErrorBoundary>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
