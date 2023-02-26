import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { 
  setCurrentPage
} from '../stores/actions/appUtilityActions';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

/**
* @author
* @function Footer
**/

export const Footer = (props) => {
  const dispatch = useDispatch();
  
  const handleSwitchPage = (page, e)=>{
    console.log(page);
    e.preventDefault();
    dispatch(setCurrentPage(page))
  }
  return(
      <div >
        <div className='footer-wrapper'>
          <div className='logo'>
            WoodsAcademy
            <div className='footer-breadcrumb'>
              <ul>
                <li onClick={(e)=>handleSwitchPage('home', e)}>Home</li>
                <li onClick={(e)=>handleSwitchPage('notices', e)}>Notices</li>
                <li onClick={(e)=>handleSwitchPage('gallery', e)}>Gallery</li>
                <li onClick={(e)=>handleSwitchPage('kindergarten', e)}>Kindergarten</li>
                <li onClick={(e)=>handleSwitchPage('admission', e)}>Admission</li>
                {/* <li onClick={(e)=>handleSwitchPage('team', e)}>Team</li> */}
                <li onClick={(e)=>handleSwitchPage('contact', e)}>Contact</li>
              </ul>
            </div>
            
          </div>
          <div className='contact'>
              <div>
                <span className='icon-map'><FontAwesomeIcon icon={faLocation} /></span>
                  Woods Academy, Seraj Bhawan, Bhatti Road, Rourkela
              </div>
              <div>
                <span className='icon-map'> <FontAwesomeIcon icon={faEnvelope} /></span>
                <a href="mailto:woodsinfo@gmail.com">infowoodsacademy@gmail.com</a> 
              </div>
              <div>
                <span className='icon-map'><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
                  <a href="tel:8249469411">+91-9861698249</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="tel:8556531004">+91-6370410114</a>
                </span>
                <br/>
                <br/>
                {/* <span className='icon-map'><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
                  <a href="tel:8556531004">+91-6370410114</a>
                </span> */}
              </div>
          </div>
        </div>
        
        <div className='social-media'>
          <span className='icon-map'>
            <FontAwesomeIcon icon={faFacebook} />  
          </span>&nbsp;&nbsp;
          <span className='icon-map'>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </span>&nbsp;&nbsp;
          <span className='icon-map'>
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </span>
        </div>
      </div>
   )
 }