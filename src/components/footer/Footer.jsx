import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";



const Footer = () => {
  return (
    <footer id='footer'>

      <div className="footer__container">

        {/* LEFT COLUMN */}
        <div className="footer__brand">
          <h2>Suman</h2>
          <p>CyberSecurity | Full-Stack | AI</p>
          <small>Fresher with practical experience in Cybersecurity, Full-Stack and AI, seeking opportunities.</small>
        </div>

        {/* CENTER COLUMN */}
        <div className="footer__links">
          <h4>Explore</h4>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Certifications</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT COLUMN */}
        <div className="footer__connect">
          <h4>Social</h4>
          <a href="https://github.com/sumanrmaindan" target="_blank" rel="noreferrer"><FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/sumanrm" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn
          </a>

          <a href="https://www.instagram.com/_.sumx_n._?igsh=NnRiZnhhM3o0ejJ6" target="_blank" rel="noreferrer"><FaInstagram /> Instagram
          </a>

          <a href="https://dribbble.com/sumanrmaindan" target="_blank" rel="noreferrer"><FaDribbble /> Dribbble
          </a>

        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
        {/* <small>© {new Date().getFullYear()} Suman. All rights reserved.</small> */}
        <button className="scroll__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><FaArrowUp size={20}/></button>
        </div>
      </div>



    </footer>
  )
}

export default Footer
















// import React from 'react'
// import './footer.css'
// import { FaFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FaTwitterSquare } from "react-icons/fa";



// const Footer = () => {
//   return (
//     <footer>
//       <a href="#" className='footer__logo'>Suman</a>

//       <ul className='permalinks'>
//         <li><a href="#">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#portfolio">Portfolio</a></li>
//         {/* <li><a href="#testimonials">Testimonials</a></li> */}
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//       <div className="footer__socials">
//         <a href="https://facebook.com"><FaFacebook /></a>
//         <a href="https://instagram.com"><FaInstagram /></a>
//         <a href="https://twitter.com"><FaTwitterSquare /></a>
//       </div>

//       <div className="footer__copyright">
//         <small>&copy; Suman. All rights reservied.</small>
//       </div>
//     </footer>
//   )
// }

// export default Footer