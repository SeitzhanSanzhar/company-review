import React, { Component } from 'react';
import { Interview } from '../../../models/Interview';
import InterviewItem from '../interview-item/InterviewItem';
import './InterviewsList.css';

interface Props {
    interviews: Interview[];
}
interface State {
    interviews: Interview[];
}

export default class InterviewsList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            interviews: this.props.interviews,
        }
    }

    componentDidMount() {
        document.title = "Explore interviews"
    }

    render() {
        return (
            <div className="interview-container">
                {this.state.interviews.map((interview) => <InterviewItem interview={interview}/>)}
            </div>
        )
    }
}
