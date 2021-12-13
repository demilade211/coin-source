import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image'
import Link from 'next/link'
import {nav_link} from "../styles/fixedNavbar.module.css"
const FixedNavbar = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><Image src="/images/logo.png" alt="log" width={150} height={40}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav >
                        <Link href="/"><Nav.Link className={nav_link} href="#features">HOME</Nav.Link></Link>
                        <Link href="about_us"><Nav.Link className={nav_link} href="about_us">ABOUT US</Nav.Link></Link>
                        <Nav.Link href="#deets">REGISTER</Nav.Link>
                        <Nav.Link href="#features">LOGIN</Nav.Link>
                        <Link href="plans"><Nav.Link href="#pricing">PLANS</Nav.Link></Link>
                        <Link href="faq"><Nav.Link href="#features">FAQ</Nav.Link></Link>
                        <Link href="certification"><Nav.Link href="#pricing">CERTIFICATION</Nav.Link></Link>
                        <Link href="contact"><Nav.Link href="#pricing">CONTACT</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default FixedNavbar
