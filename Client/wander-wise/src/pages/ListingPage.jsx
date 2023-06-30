import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from "axios";
import MainLayout from "../layout/MainLayout";

export default function ListingPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/property")
      .then((response) => setProperties(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MainLayout>
      <Container className="pt-3">
        <Row className='justify-content-center'>
          {properties.map((property) => (
            <Col key={property._id} lg={4} md={6} sm={12} className='mb-4'>
              <Card className="border-start-0 border-top-0 shadow-sm" style={{ width: "18rem" }}>
                <Card.Img variant='top' className="rounded" src={property.coverImageUrl} />
                <Card.Body>
                  <Card.Title><h3>{property.name}</h3></Card.Title>
                  <Card.Text> <h6>{property.type} in {property.city}</h6></Card.Text>
                  <Card.Text>Guests: {property.maximumGuest} Bedrooms: Bathroms: </Card.Text>
                  <Card.Text>
                    <li>{property.features[0]}</li>
                    <li>{property.features[1]}</li>
                    <li>{property.features[2]}</li>
                    <li>{property.features[3]}</li>
                  </Card.Text>
                  <Card.Text><h5>€{property.pricePerNight} per Night</h5></Card.Text>
                  <Link to={`/property/${property._id}`}>
                    <Button variant="primary">Discover More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
}
