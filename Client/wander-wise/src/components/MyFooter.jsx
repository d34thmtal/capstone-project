import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function MyFooter() {
  return (
    <footer className='bg-dark text-light py-3'>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <h5>Informazioni</h5>
            <ul className='list-unstyled'>
              <li>Chi siamo</li>
              <li>Termini e condizioni</li>
              <li>Privacy Policy</li>
              <li>Aiuto</li>
            </ul>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Scopri</h5>
            <ul className='list-unstyled'>
              <li>Case vacanze</li>
              <li>Esperienze</li>
              <li>Assistenza</li>
            </ul>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <h5>Seguici</h5>
            <ul className='list-unstyled'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className='text-center'>© 2023 Wander-Wise, All rights reserved.</p>
      </Container>
    </footer>
  );
}
