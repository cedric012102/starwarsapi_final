import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function Starships({ data }) {
    return (
        <div>
            <h1>Starships</h1>
            {data.map((starships, index) => {
                return (
                    <Container key={index}>
                        <Card>
                            <Card.Header>{starships.name}</Card.Header>
                            <Card.Body>
                                <Card.Subtitle>Model</Card.Subtitle>
                                <Card.Text>{starships.model}</Card.Text>
                                <Card.Subtitle>Manufacturer</Card.Subtitle>
                                <Card.Text>{starships.manufacturer}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>

                )
            })}
        </div>
    )
}

