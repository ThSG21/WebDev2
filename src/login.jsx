import { useState } from 'react';
import { Form, Alert, Container, Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";

import './login.css';

function Login({ setUser }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setError('');

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data));

            setUser(data);

            console.log("LOGIN ATTEMPT:", username);
            console.log("USER FOUND:", data.userId);

            navigate('/posts');
        } else {
            console.log('Login failed:', data.error);
            setError('Incorrect Username or Password');
        }
    };

    return (
        <Container>
            <div className="loginCard">
                <h2>Login</h2>
                <br />
                <Form onSubmit={handleLogin}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter Username' 
                        />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter Password'
                        />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>

                <Link to="/createAccount">Create Account</Link>
                <br />
                <br/>
                {error && <Alert variant="danger">{error}</Alert>}
            </div>
        </Container>
    );
}

export default Login;