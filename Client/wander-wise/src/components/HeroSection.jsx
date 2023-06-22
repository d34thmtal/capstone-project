import React from "react";
import {Container, Button } from "react-bootstrap";


export default function HeroSection() {
  return (
    <div className='jumbotron jumbotron-fluid bg-dark text-light text-center py-4'>
    <Container>
      <h1 className='display-4'>Pianifica la tua prossima avventura</h1>
      <p className='lead'>
        Esplora e prenota alloggi unici in tutto il mondo.
      </p>
      <Button variant='primary'>Scopri di più</Button>
    </Container>
  </div>
);
};

