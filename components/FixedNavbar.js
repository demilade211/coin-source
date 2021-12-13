import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image'
import {nav_link} from "../styles/fixedNavbar.module.css"
const FixedNavbar = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><Image src="/images/logo.png" alt="log" width={190} height={40}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav >
                        <Nav.Link className={nav_link} href="#features" cl>HOME</Nav.Link>
                        <Nav.Link className={nav_link} href="#pricing">ABOUT US</Nav.Link>
                        <Nav.Link href="#deets">REGISTER</Nav.Link>
                        <Nav.Link href="#features">LOGIN</Nav.Link>
                        <Nav.Link href="#pricing">PLANS</Nav.Link>
                        <Nav.Link href="#features">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">CERTIFICATION</Nav.Link>
                        <Nav.Link href="#pricing">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default FixedNavbar
