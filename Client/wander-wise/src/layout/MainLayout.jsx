import React from 'react';
import '../App.css';
import MyNavBar from '../components/MyNavBar';
import MyFooter from '../components/MyFooter';
import { Container } from 'react-bootstrap';


const MainLayout = ({ children }) => {
    return (
        <div>
            <MyNavBar />
            <Container fluid>
                {children}
            </Container>
            <MyFooter />
        </div>
    );
};

export default MainLayout;
