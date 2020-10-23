import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const HeaderLogged = () => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const handleOnClickSearch = () => {
    if (inputSearchRef !== null && inputSearchRef.current !== null ) {
      alert(`No result for query: ${inputSearchRef.current.value}`);
    }
  }
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link className="navbar-brand" to="/companies">GlassTeam</Link>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/companies"><BusinessRoundedIcon color='inherit'/> Companies</Link>
          <Link className="nav-link" to="/interviews"><QuestionAnswerIcon color='inherit'/> Interviews</Link>
          <Link className="nav-link" to="/reviews"><AttachMoneyIcon color='inherit'/> Reviews</Link>
        </Nav>
        <Form inline>
          <input ref = {inputSearchRef} type="text" className="mr-sm-2" placeholder='Search'/>
          <Button variant="outline-info" onClick={handleOnClickSearch}>Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default HeaderLogged;
