import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  FormControl  from 'react-bootstrap/FormControl';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import {Toolbar} from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const HeaderLogged = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Company review</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"><BusinessRoundedIcon color='inherit'/>Company list</Nav.Link>
          <Nav.Link href="#features"><QuestionAnswerIcon color='inherit'/>Interviews</Nav.Link>
          <Nav.Link href="#pricing"><AttachMoneyIcon color='inherit'/>Salaries</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default HeaderLogged;
