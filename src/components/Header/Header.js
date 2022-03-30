
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand className='fw-bold ps-0 ps-lg-5 text-uppercase ' href="#">
                        AGROHO 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">AGROHO</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-0 pe-lg-3">
                                <Nav.Link href="../../App.js">Home</Nav.Link>
                                <Nav.Link href="../../App.js">Shop</Nav.Link>
                                <NavDropdown title="Get in Touch" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="../../App.js">Contact</NavDropdown.Item>
                                    <NavDropdown.Item href="../../App.js">About Us</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="../../App.js">
                                        Feedback
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-lg-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;