import React, { ReactElement } from 'react';
import Card from "react-bootstrap/Card";
import { useRouteMatch } from "react-router";
import './InterviewDetails.css';

interface Props {
    
}

export default function InterviewDetails({}: Props): ReactElement {
    const match = useRouteMatch<{id: string}>();
    let showMessageRef = React.createRef<HTMLParagraphElement>();
    
    function showMessage() {
        if (showMessageRef.current !== null) {
            showMessageRef.current.className = "message visible-message";
        }
    }
    
    return (
        <div>
            <Card className='text-left m-3 card-details'>
                <Card.Header as="h5"> Interview #{match.params.id} is currently unavailable </Card.Header>    
                <Card.Body className="interview-body" >
                    <Card.Text>
                        Updates are coming soon! Subscribe to keep updated
                    </Card.Text>
                    <hr/>
                    <input className="subsribe-input" type="" value="Subscribe" id="input-subscribe" onClick={showMessage}/>
                    <p ref={showMessageRef} className="message">We'll email you when updates are available!</p>
                </Card.Body>
            </Card>
        </div>
    )
}
