import React, { ReactElement, useContext, useEffect } from 'react';
import UserContext from '../../../contexts/UserContext';
import { Interview } from '../../../models/Interview';
import './InterviewAdd.css';

interface Props {
    addInterview: (interview: Interview) => void;
}

export default function InterviewAdd({ addInterview }: Props): ReactElement {
    const username = useContext<string>(UserContext);
    
    let interview: Interview = { id: 0, topic: '', verdict: '', text: '', author: username, companyName: '' };
    
    useEffect(() => {
        document.title = "Add an interview";
    }, [])
    
    function handleSubmit() {
        if (interview.topic.length >= 6 && interview.text.length >= 6) {
            addInterview(interview);
        } else {
            alert("Topic length and text length must me at least 6!")
        }
    } 

    return (
        <React.Fragment>
            <h2>Add interview report</h2>
            <form className="cf-add">
                <div className="half left cf">
                    <input className="interview-input" type="text" placeholder="Topic" onChange={(e) => { interview.topic = e.target.value } }/>
                    <input className="interview-input" type="text" placeholder="Verdict" onChange={(e) => { 
                        interview.verdict = e.target.value} }/>
                    <input className="interview-input" type="" value="Submit" id="input-submit" onClick={() => handleSubmit()}/>
                </div>
                <div className="half right cf">
                    <textarea className="interview-input" placeholder="Type your interview report here..." onChange={(e) => { interview.text = e.target.value} }></textarea>
                </div>  
            </form>
        </React.Fragment>
    )
}
