import React from 'react';
import { Stack } from 'react-bootstrap'

/**
* @author
* @function Footer
**/

export const Footer = (props) => {
  return(
    <div className='footer-wrapper'>
      <div className='logo'>
        Logo
      </div>
      <div className='location'>
        Location
      </div>
      <div className='contact'>
        <Stack>
          <div>
            Address: Woods Academy, Seraj Bhawan, Bhatti Road, Rourkela
          </div>
          <div>
            Email: woodsinfo@gmail.com
          </div>
          <div>
            Phone: +91 123456789, +91 123456789
          </div>
          <div>
            Facebook: sdlfksd
          </div>
          <div>
            Instagram: sdhfsdlhf
          </div>
          <div>
            Youtube: sldkhflsdhf
          </div>
        </Stack>
      </div>
    </div>
   )

 }