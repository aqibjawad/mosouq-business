import React from "react";
import { Card, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaBell, FaWallet, FaCogs } from "react-icons/fa";

const Settings = () => {
    return (
        <div className="container-fluid">
            <Row className="justify-content-center">
                <Col md={4} lg={3}>
                    <Card className="mt-4">
                        <Card.Body>
                            <Nav className="flex-column">
                                <Nav.Link as={Link} to="/profile-update" className="d-flex align-items-center py-2">
                                    <FaUser className="me-2" /> Profile Updation
                                </Nav.Link>
                                <Nav.Link as={Link} to="/settings/account" className="d-flex align-items-center py-2">
                                    <FaCogs className="me-2" /> Account
                                </Nav.Link>
                                <Nav.Link as={Link} to="/settings/security" className="d-flex align-items-center py-2">
                                    <FaLock className="me-2" /> Security
                                </Nav.Link>
                                <Nav.Link as={Link} to="/settings/notifications" className="d-flex align-items-center py-2">
                                    <FaBell className="me-2" /> Notifications
                                </Nav.Link>
                                <Nav.Link as={Link} to="/settings/billing" className="d-flex align-items-center py-2">
                                    <FaWallet className="me-2" /> Billing
                                </Nav.Link>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Settings;
