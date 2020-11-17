import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavElements';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav className="ml-auto">
                 <NavbarContainer>
                      <NavLogo className="nav-logo" to='/'><img src={logo} alt="Logo" class="img-fluid"></img></NavLogo>
                    <NavItem><Link className="nav-link" to="/">Home</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/delivery">Book A Delivery</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/join-us">Join Us</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/contact-us">Contact Us</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/faq">FAQ</Link></NavItem>
                </NavbarContainer>
            </Nav>
        </React.Fragment >
    )
}

export default Navbar
