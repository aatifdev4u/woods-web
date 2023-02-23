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
/**
* @author
* @function 
**/

export const Home = (props) => {
  return(
    <>
      <div  className='home-wrapper'>
        <Slides/>
        <div className='mission-wrapper'>
          <div className='mission-content'>
            <h2>Our Mission</h2>
            <ul>
              <li>To provide an environment that caters to the natural fitrah of each child.</li>
              <li>To ensure that every child is given oppurtunities to explore his/her surroundings.</li>
              <li>To promote values that will help build healthy relationships.</li>
              <li>Develop speaking skills that will help children speak respectfully with other.</li>
              <li>To develop foundational academic skills</li>
            </ul>
          </div>
          <div className='img-wrapper'>
            <Image rounded src={building}/>
          </div>
        </div>
        <div className='home-item-wrapper'>
          <div className='home-information-event'>
            <h2>Information & Events</h2>
            <div className='home-information-event-wrapper'>
              <div className='home-information-event-item'>
                <Link to="/notices"> NEET 2022 Examination</Link>
              </div>
              <div className='home-information-event-item'>
                <Link to="/notices"> NEET 2022 Examination</Link>
              </div>
              <div className='home-information-event-item'>
                <Link to="/notices"> NEET 2022 Examination</Link>
              </div>
            </div>
          </div>
          <div className="home-item-gallery">
            <h2>Gallery</h2>
            <div>
              <Link to="/gallery"><Image roundedCircle  src={building} /></Link>
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