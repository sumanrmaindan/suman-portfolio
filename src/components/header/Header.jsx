import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG-20250406-WA0035-Photoroom.png'
import HeaderSocials from './HeaderSocials'
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        
        <h5 className="intro">Hello I'm</h5>
        
        <h1 className="name">SUMAN</h1>
        
        <h5 className="text-light role">
          <ReactTyped strings={[
            "CyberSecurity",
            "Full-Stack Developer",
            "AI Enthusiast",
            "Open Source Learner",
            "Tech Explorer",
            "MCA Graduate"
            ]}
              typeSpeed={70}
              backSpeed={40}
              backDelay={1200}
              loop
              />
          </h5>

        <CTA />
        <HeaderSocials/> 

        <div className="me">
          <img src={ME} alt="Suman" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header






















// import React from 'react'
// import './header.css'
// import CTA from './CTA'
// import ME from '../../assets/IMG-20250406-WA0035-Photoroom.png'
// import HeaderSocials from './HeaderSocials'

// const Header = () => {
//   return (
//     <header id='home'>
//       <div className="container header__container">
//         <h5>Hello I'am</h5>
//         <h1>SUMAN</h1>
//         <h5 className="text-light">Fullstack developer</h5>
//         <CTA />
//         <HeaderSocials/> 

//         <div className="me">
//           <img src={ME} alt="me" />
//         </div>
//         <a href="#contact" className='scroll_down'>Scroll Down</a>
//       </div>
      
//     </header>
//   )
// }

// export default Header