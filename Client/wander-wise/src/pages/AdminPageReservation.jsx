import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../layout/AdminLayout';
import { Container, Spinner, Button } from 'react-bootstrap';
import './AdminPageReservation.css';

export default function ReservationAdminPage() {
    const [reservations, setReservations] = useState([]);
    const [confirmedRows, setConfirmedRows] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleDeleteReservation = (reservationId) => {
        axios
            .delete(`http://localhost:3001/reservation/${reservationId}`)
            .then(() => {
                setReservations((prevReservations) =>
                    prevReservations.filter((reservation) => reservation._id !== reservationId)
                );
            })
            .catch((err) => console.log(err));
    };

    const toggleRowConfirmation = (reservationId) => {
        if (confirmedRows.includes(reservationId)) {
            setConfirmedRows(confirmedRows.filter((id) => id !== reservationId));
        } else {
            setConfirmedRows([...confirmedRows, reservationId]);
        }
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3001/reservation')
            .then((response) => {
                setReservations(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

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
        <AdminLayout>
            <h2>Manage your Bookings</h2>
            <div className="reservation-table-wrapper">
                <table className="reservation-table">
                    <thead>
                        <tr>
                            <th>Reservation ID</th>
                            <th>Property Name</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Guests</th>
                            <th>Customer</th>
                            <th>Mail</th>
                            <th>Phone</th>
                            <th>Total Price</th>
                            {/* <th>Confirm</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation) => (
                            <tr key={reservation._id} className={confirmedRows.includes(reservation._id) ? 'confirmed-row' : ''}>
                                <td>{reservation._id}</td>
                                <td>{reservation.propertyName}</td>
                                <td>{reservation.arrivalDate}</td>
                                <td>{reservation.departureDate}</td>
                                <td>{reservation.guestsNumber}</td>
                                <td>{reservation.guestName} {reservation.guestLastName}</td>
                                <td>{reservation.guestMail}</td>
                                <td>{reservation.guestPhone}</td>
                                <td>€{reservation.totalPrice}</td>
                                {/* <td>
                                    <Button variant="success" onClick={() => toggleRowConfirmation(reservation._id)}>
                                        Confirm
                                    </Button>
                                </td> */}
                                <td>
                                    <Button variant="danger" onClick={() => handleDeleteReservation(reservation._id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
