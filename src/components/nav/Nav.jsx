import React, { useEffect, useRef, useState } from 'react'
import './nav.css'
import { FaHome, FaUser } from "react-icons/fa"; 
import { LuBrainCog } from "react-icons/lu";
// import { RiServiceLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";

import { BiMessageMinus } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const isClickScrolling = useRef(false)
  
  const handleClick = (id) => {
    setActiveNav(id)
    
    // block observer while auto scroll happens
    isClickScrolling.current = true
    setTimeout(() => {
      isClickScrolling.current = false
    }, 800)
  }
  
  useEffect(() => {
    const sections = document.querySelectorAll("section,footer")

    // ⭐ FIX 1: Force HOME active when user reaches top
    const handleScroll = () => {
      // Do nothing while clicking nav (auto scroll)
      if (isClickScrolling.current) return
      
      // Only force Home when user manually reaches top
      if (window.scrollY < 120) {
        setActiveNav('#home')
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // ⭐ FIX 2: Smart scroll-spy observer
    const observer = new IntersectionObserver((entries) => {
      if (isClickScrolling.current) return
      
      let mostVisible = null
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (
            !mostVisible ||
            entry.intersectionRatio > mostVisible.intersectionRatio
          ) {
            mostVisible = entry
          }
        }
      })
      
      if (mostVisible) {
        setActiveNav(`#${mostVisible.target.id}`)
      }
      
    }, {
      threshold: [0.2, 0.4, 0.6, 0.8],
      rootMargin: "-20% 0px -20% 0px"
    })
    
    sections.forEach(section => observer.observe(section))
    
    // cleanup
    return () => {
      sections.forEach(section => observer.unobserve(section))
      window.removeEventListener('scroll', handleScroll)
    }
    
  }, [])
  
  return (
    <nav>
      <a href="#home"
         onClick={() => handleClick('#home')}
         className={activeNav === '#home' ? 'active' : ''}>
         <FaHome/>
      </a>

      <a href="#about"
         onClick={() => handleClick('#about')}
         className={activeNav === '#about' ? 'active' : ''}>
         <FaUser/>
      </a>

      <a href="#experience"
         onClick={() => handleClick('#experience')}
         className={activeNav === '#experience' ? 'active' : ''}>
         <LuBrainCog/>
      </a>

      <a href="#services"
         onClick={() => handleClick('#services')}
         className={activeNav === '#services' ? 'active' : ''}>
         <GrCertificate/>
      </a>

      <a href="#contact"
         onClick={() => handleClick('#contact')}
         className={activeNav === '#contact' ? 'active' : ''}>
         <BiMessageMinus/>
      </a>
    </nav>
  )
}











export default Nav
// import React from 'react'
// import './nav.css'
// import { FaHome } from "react-icons/fa"; 
// import { FaUser } from "react-icons/fa";
// import { FaBook } from "react-icons/fa";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageMinus } from "react-icons/bi";
// import { useState } from 'react';



// const Nav = () => {
//   const[activeNav, setActiveNav] = useState('#')
//   return (
//     <nav>
//       <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active':''}><FaHome/></a>
//       <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active':''} ><FaUser/></a>
//       <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active':''}><FaBook/></a>
//       <a href="#services" onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active':''}><RiServiceLine/></a>
//       <a href="#contact " onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active':''}><BiMessageMinus  /></a>
//     </nav>
//   );
// };

// export default Nav




// import React, { useEffect, useState } from 'react'
// import './nav.css'
// import { FaHome, FaUser, FaBook } from "react-icons/fa"; 
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageMinus } from "react-icons/bi";

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState('#home')

//   useEffect(() => {
//     const sections = document.querySelectorAll("section")

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setActiveNav(`#${entry.target.id}`)
//           }
//         })
//       },
//       {
//         rootMargin: "-50% 0px -50% 0px"  // how much section visible before activating
//       }
//     )

//     sections.forEach(section => observer.observe(section))

//     return () => {
//       sections.forEach(section => observer.unobserve(section))
//     }
//   }, [])

//   return (
//     <nav>
//       <a href="#home" 
//          onClick={() => setActiveNav('#home')} 
//          className={activeNav === '#home' ? 'active' : ''}>
//          <FaHome/>
//       </a>

//       <a href="#about" 
//          onClick={() => setActiveNav('#about')} 
//          className={activeNav === '#about' ? 'active' : ''}>
//          <FaUser/>
//       </a>

//       <a href="#experience" 
//          onClick={() => setActiveNav('#experience')} 
//          className={activeNav === '#experience' ? 'active' : ''}>
//          <FaBook/>
//       </a>

//       <a href="#services" 
//          onClick={() => setActiveNav('#services')} 
//          className={activeNav === '#services' ? 'active' : ''}>
//          <RiServiceLine/>
//       </a>

//       <a href="#contact" 
//          onClick={() => setActiveNav('#contact')} 
//          className={activeNav === '#contact' ? 'active' : ''}>
//          <BiMessageMinus/>
//       </a>
//     </nav>
//   );
// };

// export default Nav



