import React, { ReactElement } from 'react';
import { Interview } from '../../../models/Interview';
import './InterviewAdd.css';

interface Props {
    addInterview: (interview: Interview) => void;
}

type State = {
    topic: string;
    verdict:  string;
    text: string;
    isButtonDisabled: boolean;
};

const initialState: State = {
    topic: '',
    verdict: '',
    text: '',
    isButtonDisabled: true,
};

export default function InterviewAdd({ addInterview }: Props): ReactElement {
    
    let interview: Interview = { id: 0, topic: '', verdict: '', text: '', author: '' };
    
    // useEffect(() => {
        
    // }, [])
    
    return (
        <div>
            <h2>Add interview report</h2>
            <form className="cf-add">
                <div className="half left cf">
                    <input className="interview-input" type="text" placeholder="Topic" onChange={(e) => { 
                        interview.topic = e.target.value; } }/>
                    <input className="interview-input" type="text" placeholder="Verdict" onChange={(e) => { 
                        interview.verdict = e.target.value} }/>
                    <input className="interview-input" type="submit" value="Submit" id="input-submit" onClick={() => addInterview(interview)}/>
                </div>
                <div className="half right cf">
                    <textarea className="interview-input" placeholder="Type your interview report here..." onChange={(e) => { interview.text = e.target.value} }></textarea>
                </div>  
            </form>
        </div>
    )
}
