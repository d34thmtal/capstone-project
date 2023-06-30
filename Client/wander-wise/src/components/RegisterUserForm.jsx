import React, { createRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterUserForm() {

    const [User, setUser] = useState({});
    const navigate = useNavigate();
    const img = createRef();

    const formHandler = (event) => {
        setUser({
            ...User,
            [event.target.name]: event.target.value
        })
    }

    const formSubmittedHandler = () => {
        let data = new FormData();
        data.append('name', User.name);
        data.append('lastname', User.lastname);
        data.append('email', User.email);
        data.append('password', User.password);
        data.append('uploadFile', img.current.files[0]);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }


        axios.post('http://localhost:3001/users', data, config)
            .then((response) => { navigate("/login"); })
            .catch(error => { console.error(error) })
    }


    return (
        <>
            <h1>Register</h1>
            <Form className="my-3">
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" name="name" placeholder="Enter name" onChange={formHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastname">
                    <Form.Control type="text" name="lastname" placeholder="Enter lastname" onChange={formHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={formHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control type="password" name="password" placeholder="Enter password" onChange={formHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFile">
                    <Form.Control type="file" name="img" placeholder="Enter Image" ref={img} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formButton">
                    <Button variant="dark" onClick={formSubmittedHandler}>Submit</Button>
                </Form.Group>
            </Form>
        </>
    )
}