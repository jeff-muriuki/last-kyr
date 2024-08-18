"use client"

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';



function Educate() {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                Educate Yourself on Your Rights
                            </Card.Title>
                            <Card.Text>
                                In the future, this section will include educational materials such as the constitution and other books to help you educate yourself more on matters pertaining to your rights. Stay tuned for more resources that will empower you with the knowledge to protect and exercise your rights.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Educate;
