import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { faUsers, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import './ListingPage.css'

export default function ListingPage() {
  const [properties, setProperties] = useState([]);
  const [query, setQuery] = useState([])
  console.log(query)

  useEffect(() => {
    axios
      .get(`http://localhost:3001/property/byquery?features=${query.join(",")}`)
      .then((response) => setProperties(response.data))
      .catch((err) => console.log(err));
  }, [query]);

  const handleCheckBoxChange = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setQuery((prevFeature) => [...prevFeature, value])
    }
    else {
      setQuery((prevFeature) => prevFeature.filter((feature) => feature !== value))
    }
  }

  return (
    <MainLayout>
      <Form>
        <Form.Check
          label="private pool"
          value="private pool"
          onChange={handleCheckBoxChange}
        />
        <Form.Check
          label="tennis field"
          value="tennis field"
          onChange={handleCheckBoxChange}
        />
        <Form.Check
          label="jacuzzi"
          value="jacuzzi"
          onChange={handleCheckBoxChange}
        />
        <Form.Check
          label="fireplace"
          value="fireplace"
          onChange={handleCheckBoxChange}
        />
      </Form>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col lg={8} md={8} sm={12}>
            <Row>
              {properties.map((property) => (
                <Col key={property._id} lg={4} md={6} sm={12} className='mb-4'>
                  <Link to={`/property/${property._id}`} style={{ textDecoration: "none", width: "300px" }}>
                    <Card className="border-start-0 border-top-0 shadow-sm">
                      <Card.Img variant='top' className="rounded" src={property.coverImageUrl} />
                      <Card.Body>
                        <Card.Title><h3>{property.name}</h3></Card.Title>
                        <Card.Text> <h6>{property.type} in {property.city}</h6></Card.Text>
                        <Card.Text><FontAwesomeIcon icon={faUsers} /> {property.maximumGuest} - <FontAwesomeIcon icon={faBed} /> {property.bedrooms} - <FontAwesomeIcon icon={faBath} /> {property.bathrooms} </Card.Text>
                        <Card.Text>
                          <li>{property.features[0]}</li>
                          <li>{property.features[1]}</li>
                          <li>{property.features[2]}</li>
                          <li>{property.features[3]}</li>
                        </Card.Text>
                        <Card.Text><h3>€{property.pricePerNight}/Night</h3></Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Row>
              <h1>prova</h1>
            </Row>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}



