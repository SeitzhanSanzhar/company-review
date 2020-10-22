import React, {ReactElement, useState} from "react";
import {User} from "../../models/User";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './Register.css'

interface Props {
    adduser: (user: User) => void;
}

export default function Registration({adduser}: Props): ReactElement {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <div>
        <Form className='register-form'>
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username"  value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)}/>
            </Form.Group>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
        </div>
    );
}
