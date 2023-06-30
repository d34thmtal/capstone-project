import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function MyNavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav.Link href="/"><h3>Wander Wise</h3></Nav.Link>
                <Nav className="me-auto">
                    <Nav.Link to="/listing">Listing</Nav.Link>
                    <Nav.Link to="/about-us">About Us</Nav.Link>
                    <Nav.Link to="/login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
