import React from 'react';
import './index.css';
import { Row, Col } from "react-bootstrap";

function BusinessProfileHead() {

    const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {};

    return (
        <div className="business-profile-head">
            <Row className="justify-content-between align-items-center">
                <Col xs={12} md={6}>
                    <Row className="align-items-center">
                        <Col xs={4} md={3} className="text-center">
                            <img src="https://placehold.co/100x100" alt="Profile" className="img-fluid" />
                        </Col>
                        <Col xs={8} md={9}>
                            <p>Welcome</p>
                            <h2>{user.name}</h2>
                        </Col>
                    </Row>
                </Col>

                <Col xs="auto" className="mt-3 mt-md-0">
                    <Row>
                        <Col xs={6} md="auto">
                            <div className="view-all-button">
                                <img src="/share.png" style={{marginRight:"0.5rem"}} /> Share
                            </div>
                        </Col>
                        <Col xs={6} md="auto">
                            <div className="view-all-button ml-md-3">
                              <img src="star.png" style={{marginRight:"0.5rem"}} />  Chceck Reviews
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default BusinessProfileHead;
