import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../layout/AdminLayout';
import { Row, Col, Button } from 'react-bootstrap';
import './AdminPageProperty.css';

export default function PropertyAdminPage() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/property')
            .then((response) => setProperties(response.data))
            .catch((err) => console.log(err));
    }, []);

    const deleteProperty = (id) => {
        axios
            .delete(`http://localhost:3001/property/${id}`)
            .then((response) => {
                // Rimuovi la proprietà cancellata dall'array delle proprietà
                setProperties(properties.filter((property) => property._id !== id));
            })
            .catch((error) => {
                console.log(error);
                alert('Failed to delete property. Please try again.');
            });
    };

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

                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => deleteProperty(property._id)}>
                                        Delete
                                    </Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </AdminLayout>
        </>
    );
}

