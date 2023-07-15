import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Spinner, ToggleButton } from "react-bootstrap";
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
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);


  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:3001/property/byquery?features=${query.join(",")}`)
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return (
      <MainLayout>
        <Container className="d-flex align-items-center justify-content-center vh-100">
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      </MainLayout>
    );
  }

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
      <Container fluid className="mab-5">
        <Row className='justify-content-center'>
          <Col lg={8} md={8} sm={12}>
            <Row>
              <h1>Explore your next holiday destination</h1>
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
          <Col lg={2} md={2} sm={12} className="sticky-col">

            <Row>
              <div>
                <h3 style={{ textAlign: "center" }}>Main Features</h3>
              </div>
              <Container fluid className="filter-section">
                <div className="gap-2 d-flex flex-column align-items-center">
                  <ToggleButton
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("private pool")}
                    id='btn-check'
                    value="private pool"
                    onChange={handleCheckBoxChange}
                  >
                    Private Pool
                  </ToggleButton>
                  <ToggleButton
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("jacuzzi")}
                    id='btn-check2'
                    value="jacuzzi"
                    onChange={handleCheckBoxChange}
                    className="checkboxbutton"
                  >
                    Jacuzzi
                  </ToggleButton>
                  <ToggleButton
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("air conditioning")}
                    id='btn-check4'
                    value="air conditioning"
                    onChange={handleCheckBoxChange}
                    className="checkboxbutton"
                  >
                    Air Conditioning
                  </ToggleButton>
                  <ToggleButton
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("spacious terrace")}
                    id='btn-check5' va
                    value="spacious terrace"
                    onChange={handleCheckBoxChange}
                    className="checkboxbutton"
                  >
                    Spacious Terrace
                  </ToggleButton>
                  <ToggleButton
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("garden")}
                    id='btn-check6'
                    value="garden"
                    onChange={handleCheckBoxChange}
                    className="checkboxbutton"
                  >
                    Garden
                  </ToggleButton>
                  <ToggleButton
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("panoramic view")}
                    id='btn-check7'
                    value="panoramic view"
                    onChange={handleCheckBoxChange}
                  >
                    Panoramic View
                  </ToggleButton>
                  <ToggleButton
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("gym")}
                    id='btn-check8'
                    value="gym"
                    onChange={handleCheckBoxChange}
                    className="checkboxbutton"
                  >
                    Gym
                  </ToggleButton>
                  <ToggleButton
                    id='btn-check10'
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("near the sea")}
                    value="near the sea"
                    onChange={handleCheckBoxChange}
                    className="checkboxbutton"
                  >
                    Near The Sea
                  </ToggleButton>
                  <ToggleButton
                    id="toggle-families"
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("for families")}
                    value="for families"
                    onChange={handleCheckBoxChange}
                    className="checkboxbutton mb-2"
                  >
                    For Families
                  </ToggleButton>
                  <ToggleButton
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-success"
                    checked={query.includes("private chef")}
                    value="private chef"
                    onChange={handleCheckBoxChange}
                    className="checkboxbutton mb-2"
                  >
                    Private Chef
                  </ToggleButton>
                </div >
              </Container >
            </Row >
          </Col >
        </Row >
      </Container >
    </MainLayout >
  );
}