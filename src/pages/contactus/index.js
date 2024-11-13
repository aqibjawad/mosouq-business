import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import ContactForm from "./contact.form";
import ContactMap from "./contact.map";

const ContactUs =()=>{
    return(
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12}> 
                    <ContactMap />
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
}

export default ContactUs