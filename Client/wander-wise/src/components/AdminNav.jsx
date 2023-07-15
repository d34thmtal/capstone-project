
import React from 'react';
import Logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyNavBar.css'



export default function AdminNav() {
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('userLogin');
        navigate('/')
    }

    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Nav.Link href="/"><h3 className='px-3'><img src={Logo} alt="Logo Wander Wise" className="w-100 m-0" style={{ maxHeight: "40px" }} /></h3></Nav.Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='nav-link mx-2' to="/adminreservations">Reservation</Link>
                        <Link className='nav-link mx-2' to="/adminproperties">Property</Link>
                    </Nav>
                    <Link onClick={logout} className='nav-link'><FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#4dadb1", }} /> Logout</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}