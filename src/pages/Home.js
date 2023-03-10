import React from 'react';
import { Slides } from '../component/Slides'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import building from "../images/building.jpg";
import contact from "../images/contact.jpg";
import header from "../images/header.jpg";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../stores/actions/appUtilityActions'
/**
* @author
* @function 
**/

export const Home = (props) => {
  const dispatch = useDispatch();
  const handleSwitchPage = (page, e)=>{
    e.preventDefault();
    console.log(page);
    dispatch(setCurrentPage(page))
}
  return(
    <>
      <div  className='home-wrapper'>
        <Slides/>
        <div className='mission-wrapper'>
          <div className='mission-content'>
            <h2>Our Mission & Vision</h2>
            <ul>
              <li>To provide an environment that caters to the natural fitrah of each child.</li>
              <li>To ensure that every child is given oppurtunities to explore his/her surroundings.</li>
              <li>To promote values that will help build healthy relationships.</li>
              <li>Develop speaking skills that will help children speak respectfully with other.</li>
              <li>To develop foundational academic skills</li>
            </ul>
          </div>
          {/* <div className='img-wrapper'>
            <Image rounded src={building}/>
          </div> */}
        </div>
        <hr/>
        <div className='founder-wrapper'>
          <div className="founder-content-wrapper">
            <div className='img-wrapper'>
              <Image rounded src={building}/>
            </div>
            <div className="founder-msg-content">
              <h4>Founder Message</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <hr/>
        <div className='founder-wrapper'>
          <div className="founder-content-wrapper">
            <div className='img-wrapper'>
              <Image rounded src={building}/>
            </div>
            <div className="founder-msg-content">
              <h4>Principle Message</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <hr/>
        <div className='home-item-wrapper'>
          <div className='home-information-event'>
            <h2>Information & Events</h2>
            <div className='home-information-event-wrapper'>
              <div className='home-information-event-item' onClick={(e)=>handleSwitchPage('kindergarten', e)}>
                 New Kindergaten
              </div>
              <div className='home-information-event-item' onClick={(e)=>handleSwitchPage('notices', e)}>
                 NEET 2022 Examination
              </div>
              <div className='home-information-event-item' onClick={(e)=>handleSwitchPage('notices', e)}>
                 NEET 2022 Examination
              </div>
            </div>
          </div>
          <div className="home-item-gallery">
            <h2 onClick={(e)=>handleSwitchPage('gallery', e)}>Gallery</h2>
            <div onClick={(e)=>handleSwitchPage('gallery', e)}>
              <Image roundedCircle  src={building} />
            </div>
          </div>
          <div className="home-item-testimonials">
            <h2>Testimonials</h2>
            <div  className="home-item-testimonials-content">
              <Carousel fade>
                <Carousel.Item>
                    <p className='testimonials-content'>I am happy my children is nurturing in healthy and modesty environment.</p>
                    <span className='testimonials-user'>Aisha Parween</span>
                </Carousel.Item>
                <Carousel.Item>
                  <p className='testimonials-content'>Teachers are cooperating.</p>
                    <span className='testimonials-user'>Mohammad Zoaib</span>
                </Carousel.Item>
                <Carousel.Item>
                  <p className='testimonials-content'>Wonderful.....................</p>
                    <span className='testimonials-user'>Sidra Fatima</span>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
    
   )

 }