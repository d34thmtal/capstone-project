import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import './Error404Page.css'
import MyFooter from '../components/MyFooter';

const Error404Page = () => {
    return (
        <MainLayout className="py-5">
            <Container style={{ height: "61.4vh" }}>
                <Row>
                    <Col className="text-center py-lg-5">
                        <h1>Error 404</h1>
                        <p>The requested page was not found.</p>
                        <Button variant="primary" href="/">Go Back to Home</Button>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
};

export default Error404Page;
