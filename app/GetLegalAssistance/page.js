"use client";

import React from 'react';
import { Card, Button } from 'react-bootstrap';


const LegalAssistance = () => {
    return (
        <div className="container mt-5">
            <Card className="text-center">
                <Card.Header style={{ backgroundColor: '#E0E21C', color: '#000' }}>Legal Assistance</Card.Header>
                <Card.Body>
                    <Card.Title>Coming Soon</Card.Title>
                    <Card.Text>
                        Later in future, a user shall be able to fill a form indicating what type of assistance they require. After submission, they will be connected to a person (maybe a lawyer) or an organization that will help them solve their legal problem.
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    Stay tuned for updates!
                </Card.Footer>
            </Card>
        </div>
    );
};

export default LegalAssistance;
