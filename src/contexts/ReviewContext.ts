import React from 'react';
import {Review} from "../models/Review";

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const ReviewContext = React.createContext<Review[]>([]);

export default ReviewContext;
