import React, { useContext, useEffect, useReducer, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "../../api/axios";
import ColorContext from "../../contexts/ColorContext";
import { User } from "../../models/User";
import './Login.css';


type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loginButton = useRef<HTMLButtonElement>(null);
  const buttonColor = useContext<string>(ColorContext);
  // const history = useHistory();
  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    axios.get("/users").then(res => {
      const users: User[] = res.data;
      if (users.filter(user => (state.username === user.username && state.password === user.password)).length > 0) {
        dispatch({
          type: 'loginSuccess',
          payload: 'Login Successfully'
        });
        localStorage.setItem('logged', state.username);
        window.location.href = 'http://localhost:3000/companies';
      } else {
        dispatch({
          type: 'loginFailed',
          payload: 'Incorrect username or password'
        });
        localStorage.setItem('logged', 'false');
      }
    }).catch(function (error) {
      console.log(error);
    });
  };

  useEffect(() => {
    if (loginButton && loginButton.current)
      loginButton.current.disabled = state.isButtonDisabled;
  }, [state.isButtonDisabled])

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
    <form onSubmit={handleLogin} className='login-form center_div'>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={handleUsernameChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
      <button type='submit' ref = {loginButton} className={`btn btn-${buttonColor}`} onClick={handleLogin} disabled={true}>
        {/*<Link className="nav-link" to="/companies">*/}
        Login
        {/*</Link>*/}
      </button>
    </form>
  );
}

export default Login;
