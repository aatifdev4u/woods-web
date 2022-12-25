import { Navbar as NavbarBs,Nav, Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Navbar = ()=>{
    return(
        <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
           <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/notices" as={NavLink}>
                        Notices
                    </Nav.Link>
                    <Nav.Link to="/admission" as={NavLink}>
                        Admission
                    </Nav.Link>
                    <Nav.Link to="/team" as={NavLink}>
                        Our Team
                    </Nav.Link>
                    {/* <Nav.Link to="/examination" as={NavLink}>
                        Examination
                    </Nav.Link> */} <Nav.Link to="/gallery" as={NavLink}>
                        Gallery
                    </Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>
                        Contact us
                    </Nav.Link>
                </Nav>
           </Container>
        </NavbarBs>
    )
}