import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

export function NavBar(): React.ReactElement {

    return (
        <React.Fragment>
            <div className="container-fluid">
                <Navbar expand="lg" className="container container-md px-6">
                    <Navbar.Brand href="#home">
                        <img
                            alt="bolt logo"
                            src="bolt-logo.svg"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Ride</Nav.Link>
                            <Nav.Link href="#become-a-driver">Become a driver</Nav.Link>
                            <Nav.Link href="#fleet">Fleet</Nav.Link>
                            <Nav.Link href="#business">Business</Nav.Link>
                            <Nav.Link href="#scooter">Scooter</Nav.Link>
                            <Nav.Link href="#drive">Drive</Nav.Link>
                            <Nav.Link href="#food">Food</Nav.Link>
                            <Nav.Link href="#cities">Cities</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button className="login-btn ml-auto mr-lg-0 mr-2 success rounded-pill fw-bold text-white px-4">Login</Button>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
            </div>
        </ React.Fragment>
    );
}