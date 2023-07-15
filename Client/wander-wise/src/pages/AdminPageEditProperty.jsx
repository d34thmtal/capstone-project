import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import { Button, Form, Alert, Col, Row, Card } from 'react-bootstrap';

const AdminPageEditProperty = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [property, setProperty] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const img = useRef(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/property/${id}`)
            .then((response) => {
                setProperty(response.data);
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage('Failed to fetch property. Please try again.');
            });
    }, [id]);

    const formHandler = (event) => {
        const { name, value } = event.target;
        setProperty((prevProperty) => ({
            ...prevProperty,
            [name]: value
        }));
    };

    const formSubmittedHandler = async () => {
        try {
            const response = await axios.put(`http://localhost:3001/property/${id}`, property);
            setProperty(response)
            setSuccessMessage('Property updated successfully!');
            setErrorMessage('');
        } catch (error) {
            console.log(error);
            setSuccessMessage('');
            setErrorMessage('Failed to update property. Please try again.');
        }
    };


    return (
        <AdminLayout>
            <div className="form-container">
                <h2>Edit Property</h2>
                {successMessage && <Alert variant="success">{successMessage}</Alert>}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Form onSubmit={formSubmittedHandler}>
                    <Card className="mb-4" style={{ borderRadius: '25px' }}>
                        <Card.Img variant="top" style={{ borderRadius: '25px' }} src={property.coverImageUrl} />
                    </Card>
                    <Form.Group controlId="formFile">
                        <Form.Control type="file" name="img" placeholder="Enter Image" ref={img} />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Property Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={property.name || ''}
                            onChange={formHandler}
                            required
                        />
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={property.city || ''}
                            onChange={formHandler}
                            required
                        />
                        <Form.Label>Max Guest</Form.Label>
                        <Form.Control
                            type="number"
                            name="maximumGuest"
                            value={property.maximumGuest || ''}
                            onChange={formHandler}
                            required
                        />
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.Control
                            type="number"
                            name="bedrooms"
                            value={property.bedrooms || ''}
                            onChange={formHandler}
                            required
                        />
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control
                            type="number"
                            name="bathrooms"
                            value={property.bathrooms || ''}
                            onChange={formHandler}
                            required
                        />
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="textarea"
                            name="Description"
                            rows={3}
                            value={property.description || ''}
                            onChange={formHandler}
                            required
                        />
                        <Form.Group controlId="type">
                            <Form.Label>Type</Form.Label>
                            {/* <Form.Control type="text" name="type" onChange={formHandler} required /> */}
                            <Form.Select name="type" value={property.type || ''} onChange={formHandler} aria-label="Default select example">
                                <option>Choose a type</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Chalet">Chalet</option>
                                <option value="Cabin">Cabin</option>
                                <option value="Cottage">Cottage</option>
                            </Form.Select>
                        </Form.Group>
                        {/* <Form.Label>Latitude</Form.Label>
                        <Form.Control
                            type="text"
                            name="latitude"
                            value={property.gpsPosition.latitude || ''}
                            onChange={formHandler}
                            required
                        />
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                            type="text"
                            name="longitude"
                            value={property.gpsPosition.longitude || ''}
                            onChange={formHandler}
                            required
                        /> */}
                        <Form.Label>Price/Night</Form.Label>
                        <Form.Control
                            type="number"
                            name="pricePerNight"
                            value={property.pricePerNight || ''}
                            onChange={formHandler}
                            required
                        />
                    </Form.Group>


                    <Form.Group controlId="features">
                        <Form.Label>Features</Form.Label>
                        <Row>
                            <Col md={6}>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                            </Col>
                            <Col md={6}>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
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
                    {/* Add other form fields for editing property details */}
                    <Form.Group className="mb-3" controlId="formButton">
                        <Button variant="dark" onClick={formSubmittedHandler}>
                            Save Changes
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </AdminLayout>
    );
};

export default AdminPageEditProperty;
