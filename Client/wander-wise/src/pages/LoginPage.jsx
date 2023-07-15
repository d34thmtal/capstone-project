import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import './LoginPage.css';

export default function LoginPage() {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const formHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const formSubmittedHandler = () => {
        if (!user.email || !user.password) {
            setError("Fill all the inputs");
            return;
        }

        axios
            .post("http://localhost:3001/login", user)
            .then((response) => {
                const { status, data } = response;
                if (status === 201 && data.status === "Successfully Logged") {
                    localStorage.setItem("userLogin", JSON.stringify(data.data));
                    navigate("/adminreservations");
                } else if (data.error === "Invalid Email") {
                    setError("Invalid Email");
                } else if (data.error === "invalid password") {
                    setError("Invalid Password");
                }
            })
            .catch((error) => {
                setError("Error during the Login");
                //console.error(error.response.data)
            });
    };

    return (
        <MainLayout>
            <Container fluid style={{ height: "61.4vh" }}>
                <Col className="p-5" md={12} style={{ backgroundColor: "#4DADB1", marginTop: "20px", marginBottom: "20px", textAlign: "center", zIndex: "0" }}>
                    <h1 className="mb-3 px-4">Login</h1>
                    <Form className="my-3">
                        <Form.Group className="mb-3 px-4 login-password" controlId="formEmail">
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={formHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3 px-4 login-password" controlId="formPassword">
                            <Form.Control type="password" name="password" placeholder="Enter password" onChange={formHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3 px-4" controlId="formButton">
                            <Button variant="dark" onClick={formSubmittedHandler} size="lg">Login</Button>
                        </Form.Group>
                        {error ? (
                            <Alert key={'danger'} variant={'danger'}>
                                {error}
                            </Alert>
                        ) : (
                            ''
                        )}
                    </Form>
                </Col>
            </Container>
        </MainLayout>
    );
}

