import React, { useState, createRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import { Button, Form } from 'react-bootstrap';
import './AdminPageAddProperty.css';

export default function AdminPageAddProperty() {
    const [property, setProperty] = useState({});
    const navigate = useNavigate();
    const img = createRef();

    const formHandler = (event) => {
        setProperty({
            ...property,
            [event.target.name]: event.target.value
        });
    };


    const formSubmittedHandler = async () => {

        let data = new FormData();
        data.append('name', property.name);
        data.append('city', property.city);
        data.append('maximumGuest', property.maximumGuest);
        data.append('bedrooms', property.bedrooms);
        data.append('bathrooms', property.bathrooms);
        data.append('description', property.description);
        data.append('type', property.type);
        // data.append('features', JSON.stringify(property.features));
        data.append('features', property.features);
        data.append('pricePerNight', property.pricePerNight);
        data.append('coverImageUrl', img.current.files[0]);

        console.log(data)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        // try {
        //     await axios.post('http://localhost:3001/property', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });

        //     setProperty({
        //         name: '',
        //         city: '',
        //         maximumGuest: '',
        //         bedrooms: '',
        //         bathrooms: '',
        //         description: '',
        //         type: '',
        //         features: [],
        //         pricePerNight: '',
        //     });
        //     setSelectedImage(null);
        //     alert('Property added successfully!');
        // } catch (error) {
        //     console.log(error);
        //     alert('Failed to add property. Please try again.');
        // }
        axios.post('http://localhost:3001/property', data, config)
            .then((response) => { alert('Property added successfully!') })
            .catch(error => {
                console.log(error);
                alert('Failed to add property. Please try again.');
            })
        console.log(FormData)
    }




    return (
        <>
            <AdminLayout>
                <div className="form-container">
                    <h2>Add Property</h2>
                    <Form onSubmit={formSubmittedHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Property Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                // value={property.name}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                // value={property.city}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="maximumGuest">
                            <Form.Label>Max Guest</Form.Label>
                            <Form.Control
                                type="number"
                                name="maximumGuest"
                                // value={property.maximumGuest}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="bedrooms">
                            <Form.Label>Bedrooms</Form.Label>
                            <Form.Control
                                type="number"
                                name="bedrooms"
                                // value={property.bedrooms}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="bathrooms">
                            <Form.Label>Bathrooms</Form.Label>
                            <Form.Control
                                type="number"
                                name="bathrooms"
                                // value={property.bathrooms}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                // value={property.description}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="type">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="type"
                                // value={property.type}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="features">
                            <Form.Label>Features (comma-separated)</Form.Label>
                            <Form.Control
                                type="text"
                                name="features"
                                // value={property.features.join(', ')}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="pricePerNight">
                            <Form.Label>Price/Night</Form.Label>
                            <Form.Control
                                type="number"
                                name="pricePerNight"
                                // value={property.pricePerNight}
                                onChange={formHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFile">
                            <Form.Control type="file" name="img" placeholder="Enter Image" ref={img} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formButton">
                            <Button variant="dark" onClick={formSubmittedHandler}>Submit</Button>
                        </Form.Group>
                    </Form>
                </div>
            </AdminLayout>
        </>
    );
}