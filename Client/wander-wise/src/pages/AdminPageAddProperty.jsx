import React, { useState, createRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import { Button, Form, Alert } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import './AdminPageAddProperty.css';

export default function AdminPageAddProperty() {
    const [property, setProperty] = useState({ features: {} });
    const navigate = useNavigate();
    const img = createRef();

    const [coordinate, setCoordinate] = useState({
        features: {},
        gpsPosition: {
            latitude: 0,
            longitude: 0
        }
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const formHandler = (event) => {
        const { name, value, type, checked } = event.target;

        if (name === 'latitude' || name === 'longitude') {
            setCoordinate((prevCoordinate) => ({
                ...prevCoordinate,
                gpsPosition: {
                    ...prevCoordinate.gpsPosition,
                    [name]: parseFloat(value) // Convert the value to a number
                }
            }));
        } else if (type === 'checkbox') {
            setCoordinate((prevCoordinate) => ({
                ...prevCoordinate,
                features: {
                    ...prevCoordinate.features,
                    [value]: checked
                }
            }));
        } else {
            setCoordinate((prevCoordinate) => ({
                ...prevCoordinate,
                [name]: value
            }));
        }
    };

    const formSubmittedHandler = async () => {
        // Create a new FormData object
        let data = new FormData();

        // Append the existing form data
        data.append('name', coordinate.name);
        data.append('city', coordinate.city);
        data.append('maximumGuest', coordinate.maximumGuest);
        data.append('bedrooms', coordinate.bedrooms);
        data.append('bathrooms', coordinate.bathrooms);
        data.append('description', coordinate.description);
        data.append('type', coordinate.type);

        const featuresArray = Object.entries(coordinate.features)
            .filter(([key, value]) => value)
            .map(([key]) => key);

        featuresArray.forEach((feature, index) => {
            data.append(`features[${index}]`, feature);
        });

        data.append('pricePerNight', coordinate.pricePerNight);
        data.append('coverImageUrl', img.current.files[0]);
        data.append('gpsPosition[latitude]', coordinate.gpsPosition.latitude);
        data.append('gpsPosition[longitude]', coordinate.gpsPosition.longitude);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        axios
            .post('http://localhost:3001/property', data, config)
            .then((response) => {
                setSuccessMessage('Property added successfully!');
                setErrorMessage('');
            })
            .catch((error) => {
                console.log(error);
                setSuccessMessage('');
                setErrorMessage('Failed to add property. Please try again.');
            });
    };


    return (
        <AdminLayout>
            <div className="form-container">
                <h2>Add Property</h2>
                {successMessage && <Alert variant="success">{successMessage}</Alert>}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Form onSubmit={formSubmittedHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Property Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={formHandler} required />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" onChange={formHandler} required />
                    </Form.Group>
                    <Form.Group controlId="maximumGuest">
                        <Form.Label>Max Guest</Form.Label>
                        <Form.Control type="number" name="maximumGuest" onChange={formHandler} required />
                    </Form.Group>
                    <Form.Group controlId="bedrooms">
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.Control type="number" name="bedrooms" onChange={formHandler} required />
                    </Form.Group>
                    <Form.Group controlId="bathrooms">
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control type="number" name="bathrooms" onChange={formHandler} required />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" onChange={formHandler} required />
                    </Form.Group>
                    <Form.Group controlId="type">
                        {/* <Form.Label>Type</Form.Label>
                        <Form.Control type="text" name="type" onChange={formHandler} required /> */}
                        <Form.Select name="type" onChange={formHandler} aria-label="Default select example">
                            <option>Choose a type</option>
                            <option value="Villa">Villa</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Chalet">Chalet</option>
                            <option value="Cabin">Cabin</option>
                            <option value="Cottage">Cottage</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="latitude">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                            type="text"
                            name="latitude"
                            onChange={formHandler}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="longitude">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                            type="text"
                            name="longitude"
                            onChange={formHandler}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="pricePerNight">
                        <Form.Label>Price/Night</Form.Label>
                        <Form.Control type="number" name="pricePerNight" onChange={formHandler} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Control type="file" name="img" placeholder="Enter Image" ref={img} />
                    </Form.Group>
                    <Form.Group controlId="features">
                        <Row>
                            <Col md={6}>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="private-pool"
                                        onChange={formHandler}
                                        value="private pool"
                                    />
                                    <label className="custom-control-label" htmlFor="private-pool">
                                        private pool
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="jacuzzi"
                                        onChange={formHandler}
                                        value="jacuzzi"
                                    />
                                    <label className="custom-control-label" htmlFor="jacuzzi">
                                        jacuzzi
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="for-families"
                                        onChange={formHandler}
                                        value="for families"
                                    />
                                    <label className="custom-control-label" htmlFor="for-families">
                                        for families
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="near-the-sea"
                                        onChange={formHandler}
                                        value="near the sea"
                                    />
                                    <label className="custom-control-label" htmlFor="near-the-sea">
                                        near the sea
                                    </label>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="gym"
                                        onChange={formHandler}
                                        value="gym"
                                    />
                                    <label className="custom-control-label" htmlFor="gym">
                                        gym
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="air-conditioning"
                                        onChange={formHandler}
                                        value="air conditioning"
                                    />
                                    <label className="custom-control-label" htmlFor="air-conditioning">
                                        air conditioning
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="panoramic-view"
                                        onChange={formHandler}
                                        value="panoramic view"
                                    />
                                    <label className="custom-control-label" htmlFor="panoramic-view">
                                        panoramic view
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="spacious-terrace"
                                        onChange={formHandler}
                                        value="spacious terrace"
                                    />
                                    <label className="custom-control-label" htmlFor="spacious-terrace">
                                        spacious terrace
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="private-chef"
                                        onChange={formHandler}
                                        value="private chef"
                                    />
                                    <label className="custom-control-label" htmlFor="private-chef">
                                        private chef
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="garden"
                                        onChange={formHandler}
                                        value="garden"
                                    />
                                    <label className="custom-control-label" htmlFor="garden">
                                        garden
                                    </label>
                                </div>
                            </Col>
                        </Row>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formButton">
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </AdminLayout>
    );
};