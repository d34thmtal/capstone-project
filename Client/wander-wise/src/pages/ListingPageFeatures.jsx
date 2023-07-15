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
            <Container fluid className="mab-5">
                <Row className='justify-content-center'>
                    <h1>Discover Our Properties</h1>
                    <Col lg={8} md={8} sm={12} >
                        <Row>

                            {properties.map((property) => (
                                <Col key={property._id} lg={4} md={6} sm={12} className='mb-4'>
                                    <Link to={`/property/${property._id}`} style={{ textDecoration: "none", width: "300px" }}>
                                        <Card className="border-start-0 border-top-0 shadow-sm">
                                            <Card.Img variant='top' className="rounded" src={property.coverImageUrl} />
                                            <Card.Body style={{ height: "280px" }}>
                                                <Card.Title><h5 style={{ textAlign: 'center' }}>{property.name}</h5></Card.Title>
                                                <Card.Text> <span >{property.type} in {property.city}</span></Card.Text>
                                                <Card.Text><FontAwesomeIcon icon={faUsers} /> {property.maximumGuest} - <FontAwesomeIcon icon={faBed} /> {property.bedrooms} - <FontAwesomeIcon icon={faBath} /> {property.bathrooms} </Card.Text>
                                                <Card.Text>
                                                    <li>{property.features[0]}</li>
                                                    <li>{property.features[1]}</li>
                                                    <li>{property.features[2]}</li>
                                                    <li>{property.features[3]}</li>
                                                </Card.Text>
                                                <Card.Text><h5 style={{ textAlign: 'end', paddingInlineEnd: '15px' }}>€{property.pricePerNight}/Night</h5></Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>


            </Container >
        </MainLayout>
    );
}