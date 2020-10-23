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
    const text = 'Lorem Ipsum is simply dummy text of the printing and\n' +
      '          typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an\n' +
      '          unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only\n' +
      '          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was\n' +
      '          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n' +
      '          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    const company_data = [{'id': 1, 'name': 'Apple', 'rating': 5.0, 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png', 'text': text},
      {'id': 2, 'name': 'Google', 'rating': 5.0, 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png', 'text': text},
      {'id': 3, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
      {'id': 4, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
      {'id': 5, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
      {'id': 6,'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
    ]
    let search_list = company_data.filter((cd) => {
      if (inputSearchRef !== null && inputSearchRef.current !== null ) {
        return cd.name.indexOf(inputSearchRef.current.value) >= 0;
      }
      return false;
    })
    if (inputSearchRef !== null && inputSearchRef.current !== null ) {
      let companyNames = '';
      search_list.forEach((cd) => {
        companyNames += cd.name + '\n';
      });
      alert (`Search result: ${companyNames}`);
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
