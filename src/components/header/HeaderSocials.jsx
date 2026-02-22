import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/sumanrm" target='_blank'> <FaLinkedin /> </a>
        <a href="https://github.com/sumanrmaindan" target='_blank'> <FaSquareGithub/> </a>
        <a href="https://dribbble.com/sumanrmaindan" target='_blank'> <FaDribbble/> </a>

    </div>
  )
}

export default HeaderSocials