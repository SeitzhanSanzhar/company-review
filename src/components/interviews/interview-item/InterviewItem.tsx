import React, { ReactElement } from 'react';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Interview } from '../../../models/Interview';
import './InterviewItem.css';

interface Props {
    interview: Interview;
}

export default function InterviewItem({ interview }: Props): ReactElement {
    return(
        <div>
            <Card className='text-left m-3'>
                <Card.Header as="h5"> <Link to={`/interviews/${interview.id}`}>{interview.topic}</Link> <span className="author"> @ {interview.author} </span></Card.Header>    
                <Card.Body className="interview-body" >
                    <Card.Text>
                        {interview.text}
                    </Card.Text>
                    <hr/>
                    <Card.Text className="verdict">
                        <strong>Verdict: {interview.verdict}</strong>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
