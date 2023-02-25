import React from 'react'
import { Carousel } from 'react-bootstrap'
import building from "../images/building.jpg";
import contact from "../images/contact.jpg";
import header from "../images/header.jpg";
import  woodsAdmissionAdv1 from "../images/woodsAdmissionAdv1.jpg";
import woodsImg1200500 from '../images/woodsAdmission1200500.jpg'

/**
* @author
* @function Slides
**/

export const Slides = (props) => {
  return(
    <div>
         <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={woodsImg1200500}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={woodsImg1200500}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={woodsImg1200500}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
   )

 }