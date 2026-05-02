import {Container, Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function CreateAccount () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await fetch('http://localhost:3000/createAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const data = await result.json();

        if (data.success) {
            console.log('Registration Successful:', data);

            setUsername('');
            setPassword('');

            navigate('/login');;
        }else {
            console.log('Registration Failed:', data);
        }
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='username'
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='password'
                    />
                </Form.Group>

                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    );
}

export default CreateAccount;