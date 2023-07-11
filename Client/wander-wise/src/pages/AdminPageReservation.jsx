import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../layout/AdminLayout';
import { Row, Col } from 'react-bootstrap';
import './AdminPageReservation.css';

export default function ReservationAdminPage() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/reservation')
            .then((response) => setReservations(response.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <AdminLayout>
                <h2>Manage your Bookings</h2>
                <table className="reservation-table"> {/* Add class name for styling */}
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
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation) => (
                            <tr key={reservation._id}>
                                <td>{reservation._id}</td>
                                <td>{reservation.propertyName}</td>
                                <td>{reservation.arrivalDate}</td>
                                <td>{reservation.departureDate}</td>
                                <td>{reservation.guestsNumber}</td>
                                <td>{reservation.guestName}{reservation.guestLastName}</td>
                                <td>{reservation.guestMail}</td>
                                <td>{reservation.guestPhone}</td>
                                <td>€{reservation.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </AdminLayout>
        </>
    );
}

