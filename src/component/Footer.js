import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

/**
* @author
* @function Footer
**/

export const Footer = (props) => {
  return(
    <Container fluid>
      <br/>
      <div className='footer-wrapper'>
      <div className='logo'>
        WoodsAcademy
      </div>
      <div className='contact'>
        <Stack>
          <div>
          <span className='icon-map'><FontAwesomeIcon icon={faLocation} /></span>
            Woods Academy, Seraj Bhawan, Bhatti Road, Rourkela
          </div>
          <div>
          <span className='icon-map'> <FontAwesomeIcon icon={faEnvelope} /></span> woodsinfo@gmail.com
          </div>
          <div>
          <span className='icon-map'><FontAwesomeIcon icon={faPhone} /></span>
             +91 123456789, +91 123456789
          </div>
          <div>
            <span className='icon-map'>
              <FontAwesomeIcon icon={faFacebook} />  
            </span>
            <span className='icon-map'>
              <FontAwesomeIcon icon={faInstagramSquare} />
            </span>
          </div>
        </Stack>
      </div>
    </div>
    </Container>
   )
 }