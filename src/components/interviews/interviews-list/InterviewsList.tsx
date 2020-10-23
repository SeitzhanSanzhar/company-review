import React, { Component } from 'react';
import { Interview } from '../../../models/Interview';
import InterviewItem from '../interview-item/InterviewItem';
import './InterviewsList.css';

interface Props {
    
}
interface State {
    
}

const interviews: Interview[] = [
    {
        id: 1,
        topic: "Road to Google",
        author: "Adilet",
        text: "Contest was quite difficult and I enjoyed host matching interviews. Unfortunately, process was postponed due to COVID",
        verdict: "Postponed"
    },
    {
        id: 2,
        topic: "Phone call with Jane Street",
        author: "Jose",
        text: "There was only one problem with follow ups, you have to perform perfect to advance futher",
        verdict: "Reject"
    },
    {
        id: 1,
        topic: "Facebook phone interview",
        author: "Adilet",
        text: "I had two phone interviews at Facebook London for an internship. There were total of 4 problems and a behavioral interview. Overall this was a great experience",
        verdict: "Offer"
    },
    {
        id: 4,
        topic: "OneTechnology onsite",
        author: "Peter",
        text: "This was a strange interview, I did not feel like I achieved something after I got an offer",
        verdict: "Offer"
    },
];

export default class InterviewsList extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="interview-container">
                {interviews.map((interview) => <InterviewItem interview={interview}/>)}
            </div>
        )
    }
}
