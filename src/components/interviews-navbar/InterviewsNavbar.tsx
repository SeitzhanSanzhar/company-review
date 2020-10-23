import React, { Component } from 'react';

interface Props {
    
}
interface State {
    refNavItem: React.Ref<HTMLAnchorElement>,
}

export default class InterviewsNavbar extends Component<Props, State> {

    constructor(props: Props, state: State) {
        super(props);
        this.state = {
            refNavItem: React.createRef(),
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                    <li className="nav-item active-item">
                        <a className="nav-link" href="#">Discover Interviews<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Add an Interview</a>
                    </li>

                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}
