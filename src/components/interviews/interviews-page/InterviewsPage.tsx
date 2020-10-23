import React, { Component } from 'react';
import InterviewAdd from '../interview-add/InterviewAdd';
import InterviewsList from '../interviews-list/InterviewsList';
import './InterviewsPage.css';

interface Props {
    
}
interface State {
    showDiscover: boolean;
}

export default class InterviewsNavbar extends Component<Props, State> {
    discoverButtonRef: React.RefObject<HTMLAnchorElement>;
    addButtonRef: React.RefObject<HTMLAnchorElement>;
    
    constructor(props: Props, state: State) {
        super(props);
        this.discoverButtonRef = React.createRef();
        this.addButtonRef = React.createRef();
        this.navigateToDiscoverTab = this.navigateToDiscoverTab.bind(this);
        this.navigateToAddTab = this.navigateToAddTab.bind(this);

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

    addInterview() {

    }

    render() {
        
        return (
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

                {this.state.showDiscover ? <InterviewsList/> : <InterviewAdd addInterview={this.addInterview}/>}
            </div>
        );
    }
}
