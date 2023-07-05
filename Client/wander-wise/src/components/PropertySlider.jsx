import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PropertySlider() {
    return (
        <Container>
            <h2>The most requested features</h2>
            <Row className="mt-2">
                <Col lg={3} md={6} sm={12}>
                    <Link to="/listing/private-pool" className="text-decoration-none">
                        <Card className="mb-4" style={{ borderRadius: '25px' }}>
                            <Card.Img variant="top" style={{ borderRadius: '25px' }} src="https://picsum.photos/221" />
                            <Card.Body>
                                <Card.Title>Private Pool</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Link to="/listing/near-the-sea" className="text-decoration-none">
                        <Card className="mb-4" style={{ borderRadius: '25px' }}>
                            <Card.Img variant="top" style={{ borderRadius: '25px' }} src="https://picsum.photos/225" />
                            <Card.Body>
                                <Card.Title>Near the Sea</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Link to="/listing/for-families" className="text-decoration-none">
                        <Card className="mb-4" style={{ borderRadius: '25px' }}>
                            <Card.Img variant="top" style={{ borderRadius: '25px' }} src="https://picsum.photos/226" />
                            <Card.Body>
                                <Card.Title>For Families</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Link to="/listing/jacuzzi" className="text-decoration-none">
                        <Card className="mb-4" style={{ borderRadius: '25px' }}>
                            <Card.Img variant="top" style={{ borderRadius: '25px' }} src="https://picsum.photos/227" />
                            <Card.Body>
                                <Card.Title>Jacuzzi</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}






