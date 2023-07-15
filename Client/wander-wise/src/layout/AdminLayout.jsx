import React from 'react';
import AdminNav from '../components/AdminNav';
import { Container } from 'react-bootstrap';

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminNav />
            <Container fluid className='body-page'>
                {children}
            </Container>
        </>
    );
}