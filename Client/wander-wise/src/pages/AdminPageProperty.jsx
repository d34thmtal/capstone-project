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

    return (
        <>
            <AdminLayout>
                <h2>Manage your Properties</h2>
                <Button href="/addproperty">Add Property</Button>
                <table className="property-table"> {/* Add class name for styling */}
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
                                <td>{property.coverImageUrl}</td>
                                <td>{property.description}</td>
                                <td>{property.type}</td>
                                <td>{property.features}</td>
                                <td>{property.name}</td>
                                <td>{property.city}</td>
                                <td>{property.maximumGuest}</td>
                                <td>{property.bedrooms}</td>
                                <td>{property.bathrooms}</td>
                                <td>{property.pricePerNight}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </AdminLayout>
        </>
    );
}
