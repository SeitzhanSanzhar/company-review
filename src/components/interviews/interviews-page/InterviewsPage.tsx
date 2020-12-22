import React, { ReactElement, useMemo, useState } from 'react';
import interviews from '../../../data/InterviewData';
import { Interview } from '../../../models/Interview';
import InterviewAdd from '../interview-add/InterviewAdd';
import InterviewsList from '../interviews-list/InterviewsList';
import './InterviewsPage.css';

interface Props {
    
}

export default function InterviewsPage({}: Props): ReactElement {
    const [showDiscover, setShowDiscover] = useState(true);

    const discoverButtonRef = React.useRef<HTMLAnchorElement>(null);
    const addButtonRef = React.useRef<HTMLAnchorElement>(null);
    
    function navigateToDiscoverTab() {
        if (discoverButtonRef.current !== null) {
            discoverButtonRef.current.className = "nav-link active";
        }
        if (addButtonRef.current !== null) {
            addButtonRef.current.className = "nav-link";
        }
        setShowDiscover(true);
    }

    function navigateToAddTab() {
        if (discoverButtonRef.current !== null) {
            discoverButtonRef.current.className = "nav-link";
        }
        if (addButtonRef.current !== null) {
            addButtonRef.current.className = "nav-link active";
        }
        setShowDiscover(false);
    }

    function addInterview(interview: Interview) {
        interview.id = interviews.length + 1;
        interviews.push(interview);
        navigateToDiscoverTab();
    }

    function getInterviews() {
        interviews.sort((a, b) => (a.verdict > b.verdict) ? 1 : -1);
        return interviews;
    }

    let interviewsToShow = useMemo(() => getInterviews(), [interviews]);

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                    <li className="nav-item active-item">
                        <a className="nav-link active" ref={discoverButtonRef} onClick={navigateToDiscoverTab} >Discover Interviews</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" ref={addButtonRef} onClick={navigateToAddTab}>Add an Interview</a>
                    </li>

                    </ul>
                </div>
                </nav>

                {showDiscover ? <InterviewsList interviews={interviewsToShow}/> : <InterviewAdd addInterview={addInterview}/>}
            </div>
        </div>
    )
}
