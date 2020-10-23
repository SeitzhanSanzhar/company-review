import React, { ReactElement } from 'react';
import Card from "react-bootstrap/Card";
import { Interview } from '../../../models/Interview';
import './InterviewItem.css';

interface Props {
    interview: Interview;
}

export default function InterviewItem({ interview }: Props): ReactElement {
    return(
        <Card className='text-left'>
            <Card.Header as="h5">{interview.topic} <span className="author"> @ {interview.author} </span></Card.Header>
            <Card.Body className="interview-body">
                <Card.Text>
                    {interview.text}
                </Card.Text>
                <hr/>
                <Card.Text className="verdict">
                    <strong>Verdict: {interview.verdict}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
