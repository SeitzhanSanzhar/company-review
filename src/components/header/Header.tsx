import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ICompany from "../../models/Company";

interface HeaderProps {
  filterCompany: (search_val:  string) => void
}

const HeaderLogged = (props: HeaderProps) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const handleOnClickSearch = () => {
    if (inputSearchRef !== null && inputSearchRef.current !== null ) {
      props.filterCompany(inputSearchRef.current.value);
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
          <Button variant="outline-info m-1" onClick={handleOnClickSearch}>Search</Button>
        </Form>
        <Link to='/login'><Button variant="outline-info m-1">Log In</Button></Link>
        <Link to='/register'><Button variant="outline-info m-1">Register</Button></Link>
      </Navbar>
    </>
  );
}

export default HeaderLogged;
