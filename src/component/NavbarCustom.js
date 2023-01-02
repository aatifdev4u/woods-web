import { Navbar ,Nav, NavDropdown , Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarCustom = ()=>{
    return(
        <Navbar  collapseOnSelect  bg="primary" expand="lg" variant='dark' sticky="top" >
        <Container>
            <Navbar.Brand href="/">Woods Academy</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
             */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/notices">Notices</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/admission">Admission</Nav.Link>
                <Nav.Link href="/team">Team</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarCustom;