import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="jumbotron jumbotron-fluid hero-section">
      <div className="hero-overlay"></div>
      <Container className="hero-container">
        <h1 className="display-4 font-weight-bold">Stay Like a Local, Anywhere You Travel</h1>
        <p className="lead">Design Your Ideal Vacation Experience with the Right Stay</p>
        <Link className='nav-link mx-2' to="/listing"><Button variant="primary btn-lg" type="submit" style={{ backgroundColor: '#4DADB1', color: 'white', border: "0" }}>Discover More</Button></Link>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}








