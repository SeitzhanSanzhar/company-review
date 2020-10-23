import React, { Component } from 'react';

import InterviewsNavbar from '../interviews-navbar/InterviewsNavbar';

interface Props {
    
}
interface State {
    
}

export default class InterviewsList extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <InterviewsNavbar />
            </div>
        )
    }
}
