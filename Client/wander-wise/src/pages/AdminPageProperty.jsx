import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../layout/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import './AdminPageProperty.css';

export default function PropertyAdminPage() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);
    const [confirmedRows, setConfirmedRows] = useState([]);

    const toggleRowConfirmation = (propertyId) => {
        if (confirmedRows.includes(propertyId)) {
            setConfirmedRows(confirmedRows.filter((id) => id !== propertyId));
        } else {
            setConfirmedRows([...confirmedRows, propertyId]);
        }
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3001/property')
            .then((response) => {
                setProperties(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const deleteProperty = (id) => {
        axios
            .delete(`http://localhost:3001/property/${id}`)
            .then((response) => {
                setProperties(properties.filter((property) => property._id !== id));
            })
            .catch((error) => {
                console.log(error);
                alert('Failed to delete property. Please try again.');
            });
    };

    if (loading) {
        return (
            <AdminLayout>
                <Container className="d-flex align-items-center justify-content-center vh-100">
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            </AdminLayout>
        );
    }

    return (
        <>
            <AdminLayout>
                <h2>Manage your Properties</h2>
                <Button href="/addproperty">Add Property</Button>
                <table className="property-table">
                    <thead>
                        <tr>
                            <th>Property Name</th>
                            <th>City</th>
                            <th>Max Guest</th>
                            <th>Bedrooms</th>
                            <th>Bathrooms</th>
                            <th>Price/Night</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property) => (
                            <tr key={property._id}>
                                <td>{property.name}</td>
                                <td>{property.city}</td>
                                <td>{property.maximumGuest}</td>
                                <td>{property.bedrooms}</td>
                                <td>{property.bathrooms}</td>
                                <td>€{property.pricePerNight}</td>
                                <td>
                                    <Button variant="primary" onClick={() => navigate(`/editproperty/${property._id}`)}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => deleteProperty(property._id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </AdminLayout>
        </>
    );
}
