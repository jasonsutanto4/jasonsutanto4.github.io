import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Project = () => {
    return(
        <Container fluid id="projects" style={{backgroundColor: "#343a40", padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#dee2e6"}}>Projects</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%', margin: "20px 0" }}>
                        <Card.Body>
                            <Card.Title>Elert</Card.Title>
                            <Card.Text>
                            Elert is an application that lets users report any harassment cases in their area.
                            </Card.Text>
                            <a href="https://devpost.com/software/alert-731fwb?"><Button variant="primary">Go somewhere</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
              
               
            </Row>
        </Container>
    );
};

export default Project;