import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

/**
* @author
* @function Footer
**/

export const Footer = (props) => {
  return(
      <div className='footer-wrapper'>
        <div className='logo'>
          WoodsAcademy
        </div>
        <div className='contact'>
            <div>
              <span className='icon-map'><FontAwesomeIcon icon={faLocation} /></span>
                Woods Academy, Seraj Bhawan, Bhatti Road, Rourkela
            </div>
            <div>
              <span className='icon-map'> <FontAwesomeIcon icon={faEnvelope} /></span>
              <a href="mailto:woodsinfo@gmail.com">woodsinfo@gmail.com</a> 
            </div>
            <div>
              <span className='icon-map'><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
                <a href="tel:8249469411">+91-8249469411</a>
              </span>
              <br/>
              <span className='icon-map'><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
                <a href="tel:8556531004">+91-8556531004</a>
              </span>
            </div>
            <hr/>
            <div className='social-media'>
              <span className='icon-map'>
                <FontAwesomeIcon icon={faFacebook} />  
              </span>
              <span className='icon-map'>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </span>
              <span className='icon-map'>
                <FontAwesomeIcon icon={faYoutubeSquare} />
              </span>
            </div>
        </div>
      </div>
   )
 }