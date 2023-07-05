import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faUsers, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "react-bootstrap/Card";
import { Link, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from "axios";
import MainLayout from "../layout/MainLayout";

export default function ListingPageFeatures() {
    const { features } = useParams()
    console.log(features)
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/property/byquery?${features}`)
            .then((response) => setProperties(response.data))
            .catch((err) => console.log(err));
    }, [features]);

    return (
        <MainLayout>
            <Container fluid className="pt-3 col-7 justify-content-start">
                <Row className='justify-content-center'>
                    {properties.map((property) => (
                        <Col key={property._id} lg={4} md={6} sm={12} className='mb-4'>
                            <Card className="border-start-0 border-top-0 shadow-sm" style={{ width: "18rem" }}>
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
            <Container fluid className="pt-3 col-5">

            </Container>
        </MainLayout>
    );
}