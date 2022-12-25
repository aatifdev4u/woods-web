import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap'

/**
* @author
* @function 
**/

export const Contact = (props) => {
  return(
    <div className='contact-wrapper'>
        <h2>Contact Details</h2>
        <Row>
          <Col className='contact-details'>
            <div className='title'>Leave a message</div>
            <form>
              <Stack gap={3}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone'/>
                <textarea placeholder='Message' row={10} col={10}>
                </textarea>
                <div style={{'textAlign': 'center'}}>
                  <button type='submit' className='active'>Submit</button>
                </div>
                
              </Stack>
            </form>
          </Col>
          <Col className='location-details'>
            <div className='title'>Location</div>
            <Stack>
              <div>Address</div>
              <p>Unisco university
                Albany, NY
                USA. 11001</p>
              <div>EMail</div>
              <div>info@unisco.edu</div>
              <div>admin@unisco.edu</div>
              <div>phone</div>
              <div>+91 555 668 986</div>
            </Stack>
          </Col>
        </Row>
    </div>
   )

 }