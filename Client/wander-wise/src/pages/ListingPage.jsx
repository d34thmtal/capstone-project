import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { faUsers, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { MDBCheckbox, MDBBtnGroup } from 'mdb-react-ui-kit';
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import './ListingPage.css'


export default function ListingPage() {
  const [properties, setProperties] = useState([]);
  const [query, setQuery] = useState([])


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
      <Container fluid>
        <Row className='justify-content-center'>
          <Col lg={8} md={8} sm={12}>
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
          <Col lg={2} md={2} sm={12}>

            <Row>
              <div>
                <h3>Features</h3>
              </div>
              <MDBBtnGroup className="gap-2 d-flex flex-column">
                <MDBCheckbox
                  btn
                  id='btn-check'
                  wrapperTag='span'
                  label="Private Pool"
                  value="private pool"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />
                <MDBCheckbox
                  btn
                  id='btn-check1'
                  wrapperTag='span'
                  label="Tennis Field"
                  value="tennis field"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />
                <MDBCheckbox
                  btn
                  id='btn-check2'
                  wrapperTag='span'
                  label="Jacuzzi"
                  value="jacuzzi"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />
                <MDBCheckbox
                  btn
                  id='btn-check3'
                  wrapperTag='span'
                  label="Fireplace"
                  value="fireplace"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />

                <MDBCheckbox
                  btn
                  id='btn-check4'
                  wrapperTag='span'
                  label="Air Conditioning"
                  value="air conditioning"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />
                <MDBCheckbox
                  btn
                  id='btn-check5'
                  wrapperTag='span'
                  label="Spacious Terrace"
                  value="spacious terrace"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />
                <MDBCheckbox
                  btn
                  id='btn-check6'
                  wrapperTag='span'
                  label="Garden"
                  value="garden"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />
                <MDBCheckbox
                  btn
                  id='btn-check7'
                  wrapperTag='span'
                  label="Panoramic View"
                  value="panoramic view"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />
                <MDBCheckbox
                  btn
                  variant="dark"
                  id='btn-check8'
                  wrapperTag='span'
                  label="Gym"
                  value="gym"
                  onChange={handleCheckBoxChange}
                  className="green-btn"
                />
              </MDBBtnGroup>
            </Row>
          </Col>
        </Row>
      </Container >
    </MainLayout >
  );
}


{/* <div>
                <div onClick={handleCheckBoxChange}>
                  <img src="https://picsum.photos/216" alt="Private Pool" />
                  <span>Private Pool</span>
                </div>
                <div onClick={handleCheckBoxChange}>
                  <img src="https://picsum.photos/216" alt="Tennis Field" />
                  <span>Tennis Field</span>
                </div>
                <div onClick={handleCheckBoxChange}>
                  <img src="https://picsum.photos/216" alt="Jacuzzi" />
                  <span>Jacuzzi</span>
                </div>
                <div onClick={handleCheckBoxChange}>
                  <img src="https://picsum.photos/216" alt="Fireplace" />
                  <span>Fireplace</span>
                </div>
              </div> */}
