import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Container, Row, Col, Stack} from 'react-bootstrap';

/**
* @author
* @function 
**/

export const  Notices = (props) => {
  
  return(
    <div className='notice-wrapper'>
      <Row>
        <Col>
          <h2>Upcoming Events</h2>
        </Col>
        <Col>
          <h2>Important Dates</h2>
          <Stack>
            <div className='notice-item-wrapper'>
              <div className='notice-item-header'>
                <span className='notice-item-header-date'>12 feb, 2022</span>
                <span className='notice-item-header-title'>Syllabus for Final Exam</span>
              </div>
              <div className='notice-item-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
              </div>
              <hr/>
            </div>
            <div className='notice-item-wrapper'>
              <div className='notice-item-header'>
                <span className='notice-item-header-date'>12 feb, 2022</span>
                <span className='notice-item-header-title'>Syllabus for Final Exam</span>
              </div>
              <div className='notice-item-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
              </div>
              <hr/>
            </div>
            <div className='notice-item-wrapper'>
              <div className='notice-item-header'>
                <span className='notice-item-header-date'>12 feb, 2022</span>
                <span className='notice-item-header-title'>Syllabus for Final Exam</span>
              </div>
              <div className='notice-item-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
              </div>
              <hr/>
            </div>
          </Stack>
        </Col>
      </Row>
    </div>
   
   )

 }