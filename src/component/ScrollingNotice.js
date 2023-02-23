import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Container, Row, Col, Stack} from 'react-bootstrap';

/**
* @author
* @function 
**/

export const  ScrollingNotice= (props) => {
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
        <div className="scrolling-notice-wrapper" key={key}>
            <animated.div style={scrolling}>Admission Open for academic year 2023</animated.div>
        </div>
    )

 }