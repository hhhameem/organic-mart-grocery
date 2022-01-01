import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light" className="text-dark navigation" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-warning">Organic-Mart-Grocery</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <p><i className="fas fa-cart-arrow-down mt-3 text-secondary"></i></p>
                        {/* <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;