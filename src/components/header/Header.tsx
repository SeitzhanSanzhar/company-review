import React from 'react';
import {AppBar} from "@material-ui/core";
import './Header.css';
import Button from "@material-ui/core/Button";
import { Toolbar } from '@material-ui/core';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
// import { Link } from 'react-router-dom';

type Props = {
};

type State = {
};

class Header extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <AppBar title="My App" style={{ background: "beige" }}>
                <Toolbar>
                    <BusinessRoundedIcon color='action'/>
                    <Button size='large'>Companies</Button>
                    <AttachMoneyIcon color='action'/>
                    <Button size='large'>Salaries</Button>
                    <QuestionAnswerIcon color='action'/>
                    <Button size='large'>Interviews</Button>
                    <Button size='large'>Default</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
