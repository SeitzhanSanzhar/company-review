import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface Props {
    
}
interface State {
    
}

export default class InterviewsNavbar extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="home">GlassTeam</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="home"><BusinessRoundedIcon color='inherit'/>Company list</Nav.Link>
                <Nav.Link href="interviews"><QuestionAnswerIcon color='inherit'/>Interviews</Nav.Link>
                <Nav.Link href="salaries"><AttachMoneyIcon color='inherit'/>Salaries</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar>
            </div>
        )
    }
}
