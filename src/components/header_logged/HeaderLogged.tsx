import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  FormControl  from 'react-bootstrap/FormControl';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';

const HeaderLogged = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Company review</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Company list</Nav.Link>
          <Nav.Link href="#features">Interviews</Nav.Link>
          <Nav.Link href="#pricing">Salaries</Nav.Link>
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
