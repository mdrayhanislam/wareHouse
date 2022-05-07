import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    return (
        <div className='container w-50 mx-auto'>
        <h1 className='text-primary text-center mt-2'> Please Login </h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            
            <Button variant="primary w-50 mx-auto d-block mb-5" type="submit">
                Login
            </Button>
        </Form>
        <p>If you are the first to visit our website, <Link to="/register" className='text-danger pe-auto text-decoration-none'> Please Register </Link></p>
        <p>Forget Password <button className='text-primary pe-auto text-decoration-none btn btn-link' > Please Reset Password </button></p>
       
        
    </div>
    );
};

export default Login;