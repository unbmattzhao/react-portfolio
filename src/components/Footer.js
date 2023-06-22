import React from 'react';


import { BsLinkedin, MdMarkEmailRead, FaGithub} from ''react-icons/'

import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar className='footer text-center justify-content-center ' fixed="bottom">
      <NavLink href='https://github.com/' target='_blank'>
        <GitHubIcon className='mx-4 icon' />
      </NavLink>
      <NavLink href='https://www.linkedin.com/' target='_blank'>
        <LinkedInIcon className='mx-4 icon' />
      </NavLink>
      <NavLink href='mailto: aaturner1995@gmail.com' target='_blank'>
        <EmailIcon className='mx-4 icon' />
      </NavLink>
    </Navbar>
  )
}

export default Footer