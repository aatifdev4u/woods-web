import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Container, Row, Col, Stack} from 'react-bootstrap';

/**
* @author
* @function 
**/

export const  Notices = (props) => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 10000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return(
    <Container>
      <div key={key}>
        <animated.div style={scrolling}>Admission Open for academic year 2023</animated.div>
      </div>
      <Row>
        <Col>
          <h2>Upcoming Events</h2>
        </Col>
        <Col>
          <h2>Important Dates</h2>
          <Stack>
            <div>
              <div>
                <span>12 feb, 2022</span>
                <span>Syllabus for Final Exam</span>
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
              </div>
            </div>
            <div>
              <div>
                <span>12 feb, 2022</span>
                <span>Syllabus for Final Exam</span>
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
              </div>
            </div>
            <div>
              <div>
                <span>12 feb, 2022</span>
                <span>Syllabus for Final Exam</span>
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
              </div>
            </div>
            <div>
              <div>
                <span>12 feb, 2022</span>
                <span>Syllabus for Final Exam</span>
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
   
   )

 }