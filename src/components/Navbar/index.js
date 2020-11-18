import React, { useState } from 'react'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLink } from './NavElements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from './logo.svg';


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: '#fff'}}>
            <Nav >
            <NavLogo className="nav-logo" to='/'><img src={logo} alt="Logo" className="img-fluid"></img></NavLogo>
            <NavbarContainer>
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click} className="ml-auto">
                    <NavItem><NavLink className="nav-link" to="/">Home</NavLink></NavItem>
                    <NavItem><NavLink className="nav-link"to="/delivery">Book A Delivery</NavLink></NavItem>
                    <NavItem><NavLink className="nav-link" to="/join-us">Join Us</NavLink></NavItem>
                    <NavItem><NavLink className="nav-link" to="/contact-us">Contact Us</NavLink></NavItem>
                    <NavItem><NavLink className="nav-link" to="/faq">FAQ</NavLink></NavItem>
            </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </React.Fragment >
    )
}

export default Navbar
