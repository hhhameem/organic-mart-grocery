import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './NavigationBar.css';

const NavigationBar = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <Navbar bg="light" variant="light" className="text-dark navigation py-0 " sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="nav-logo"><img src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/organic-food-on-board-fb-55662cbc11.jpg" className="w-100 rounded-circle" alt="" /></Navbar.Brand>
                    <Navbar.Brand href="#home" className="text-warning">Organic-Mart-Grocery</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end hover">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user.email ?
                                <div>
                                    <Button onClick={logout} variant="light">Logout</Button>
                                </div>
                                : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        <p><i className="fas fa-cart-arrow-down mt-3 text-secondary"></i></p>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;