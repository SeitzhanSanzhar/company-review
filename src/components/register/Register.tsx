import React, { FormEvent, ReactElement, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { User } from "../../models/User";
import './Register.css';
import axios from "../../api/axios";



interface Props {
    addUser: (user: User) => void;
}

export default function Registration({addUser}: Props): ReactElement {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');


    function handleSubmit(event: FormEvent<HTMLElement>):void {
        const user: User = {username: username, email: email, password:password};
        axios.post("/users", user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <div>
        <Form className='register-form' onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username"  value={username} onChange={e => setUsername(e.target.value)}/>
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
            {
                password !== confirmpassword &&
                <div className="alert alert-danger" role="alert">
                    Password does not match password confirmation
                </div>
            }
            {
                password.length < 8 && password !== '' &&
                <div className="alert alert-danger" role="alert">
                    Password should have minimum eight characters
                </div>
            }
            <Button variant="primary" type="submit" disabled={!(password === confirmpassword && password.length >= 8)}>
                Register
            </Button>
        </Form>
        </div>
    );
}
