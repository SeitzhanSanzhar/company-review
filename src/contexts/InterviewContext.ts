import React from 'react';
import { Interview } from "../models/Interview";

const InterviewContext = React.createContext<Interview[]>([]);

export default InterviewContext;
