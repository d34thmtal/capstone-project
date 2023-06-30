import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "./SearchForm";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="jumbotron jumbotron-fluid hero-section">
      <div className="hero-overlay"></div>
      <Container className="hero-container">
        <h1 className="display-4 font-weight-bold">Stay Like a Local, Anywhere You Travel</h1>
        <p className="lead">Design Your Ideal Vacation Experience with the Right Stay</p>
        <Row>
          <Col>
            <SearchForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}








