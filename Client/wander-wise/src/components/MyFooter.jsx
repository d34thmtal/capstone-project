import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyFooter.css';

export default function MyFooter() {
  return (
    <footer className='bg-custom py-3'>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <h5>About</h5>
            <ul className='list-unstyled'>
              <li><Link className='text-decoration-none' to='/about-us'>About Us</Link></li>
              <li><Link to='/terms-conditions'>Terms and Conditions</Link></li>
              <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
              <li><Link to='/help'>Help</Link></li>
            </ul>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Discover</h5>
            <ul className='list-unstyled'>
              <li><Link to='/listing'>Vacation Homes</Link></li>
              <li><Link to='/experiences'>Experiences</Link></li>
              <li><Link to='/assistance'>Assistance</Link></li>
            </ul>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <h5>Follow Us</h5>
            <ul className='list-unstyled'>
              <li><a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
              <li><a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
              <li><a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className='text-center'>© 2023 Wander-Wise. All rights reserved.</p>
      </Container>
    </footer>
  );
}

