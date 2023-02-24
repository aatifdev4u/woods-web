import { Navbar ,Nav, NavDropdown , Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    setCurrentPage
} from '../stores/actions/appUtilityActions';

const NavbarCustom = ()=>{
    const dispatch = useDispatch();

    const handleSwitchPage = (page, e)=>{
        console.log(page);
        e.preventDefault();
        dispatch(setCurrentPage(page))
    }
    return(
        <Navbar  collapseOnSelect  bg="primary" expand="lg" variant='dark' sticky="top" >
        <Container>
            <Navbar.Brand href="/">Woods Academy</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" onClick={(e)=>handleSwitchPage('home', e)}>Home</Nav.Link>
                <Nav.Link href="/notices" onClick={(e)=>handleSwitchPage('notices', e)}>Notices</Nav.Link>
                <Nav.Link href="/gallery" onClick={(e)=>handleSwitchPage('gallery', e)}>Gallery</Nav.Link>
                <Nav.Link href="/admission" onClick={(e)=>handleSwitchPage('admission', e)}>Admission</Nav.Link>
                <Nav.Link href="/team" onClick={(e)=>handleSwitchPage('team', e)}>Team</Nav.Link>
                <Nav.Link href="/contact" onClick={(e)=>handleSwitchPage('contact', e)}>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarCustom;