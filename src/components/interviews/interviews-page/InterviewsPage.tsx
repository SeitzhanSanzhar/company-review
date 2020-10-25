import React, { Component } from 'react';
import InterviewContext from '../../../contexts/InterviewContext';
import { Interview } from '../../../models/Interview';
import InterviewAdd from '../interview-add/InterviewAdd';
import InterviewsList from '../interviews-list/InterviewsList';
import './InterviewsPage.css';

interface Props {
    
}
interface State {
    showDiscover: boolean;
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
        text: "There was one problem with follow ups, you have to perform perfect to advance further",
        verdict: "Reject"
    },
    {
        id: 3,
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

export default class InterviewsNavbar extends Component<Props, State> {
    discoverButtonRef: React.RefObject<HTMLAnchorElement>;
    addButtonRef: React.RefObject<HTMLAnchorElement>;
    
    constructor(props: Props, state: State) {
        super(props);
        this.discoverButtonRef = React.createRef();
        this.addButtonRef = React.createRef();
        this.navigateToDiscoverTab = this.navigateToDiscoverTab.bind(this);
        this.navigateToAddTab = this.navigateToAddTab.bind(this);
        this.addInterview = this.addInterview.bind(this);
        
        this.state = {
            showDiscover: true,
        }
    }

    navigateToDiscoverTab() {
        if (this.discoverButtonRef.current !== null) {
            this.discoverButtonRef.current.className = "nav-link active";
        }
        if (this.addButtonRef.current !== null) {
            this.addButtonRef.current.className = "nav-link";
        }
        this.setState({showDiscover: true});
    }

    navigateToAddTab() {
        if (this.discoverButtonRef.current !== null) {
            this.discoverButtonRef.current.className = "nav-link";
        }
        if (this.addButtonRef.current !== null) {
            this.addButtonRef.current.className = "nav-link active";
        }
        this.setState({showDiscover: false});
    }

    addInterview(interview: Interview) {
        interview.id = interviews.length + 1;
        interviews.push(interview);
        this.navigateToDiscoverTab();
    }

    render() {  
        return (
            <InterviewContext.Provider value={interviews}>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                    <li className="nav-item active-item">
                        <a className="nav-link active" ref={this.discoverButtonRef} onClick={this.navigateToDiscoverTab} >Discover Interviews</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" ref={this.addButtonRef} onClick={this.navigateToAddTab}>Add an Interview</a>
                    </li>

                    </ul>
                </div>
                </nav>

                {this.state.showDiscover ? <InterviewsList interviews={interviews}/> : <InterviewAdd addInterview={this.addInterview}/>}
            </div>
            </InterviewContext.Provider>
        );
    }
}
