import React, { useState } from 'react'
import'./about.css'
import ME from '../../assets/IMG-20250329-WA0007.jpg'
// import { FaAward } from "react-icons/fa";
// import { HiUserGroup } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { LuBrainCog } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";

import mite from '../../assets/mite-logo.png'
import Milagres from '../../assets/logo.png'



const About = () => {
  const [showEducation, setShowEducation] = useState(false)
  return (
    
    
    
    <section id='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>

  <div className='container about__container'>

    {/* LEFT IMAGE */}
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image" />
      </div>
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className="about__content">

      <p>
        I recently completed my Master of Computer Applications (MCA), where I built a strong 
        foundation in software development and cybersecurity fundamentals. During my academic 
        journey, I worked on projects involving web development, vulnerability assessment, 
        and network analysis.
      </p>

      <p>
        I am passionate about cybersecurity and full-stack development, and I enjoy exploring 
        tools like Nmap, Wireshark, Burp Suite, and Packet Tracer to understand real-world 
        security scenarios. I am now looking for an opportunity to start my professional career 
        where I can learn, grow, and contribute to meaningful projects.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>
      {/* CARDS AT BOTTOM */}
      <div className="about__cards"> 

        <article className='about__card' onClick={() => setShowEducation(true)}>
          <FaUserGraduate className='about__icon'/>
          <h5>Education</h5>
          <small>Click Here To View</small>
        </article>

        <article className='about__card' onClick={() => window.location.href = "#experience"}>
          <LuBrainCog className='about__icon'/>
          <h5>Skills</h5>
          <small>Java • Python • MERN • Cybersecurity</small>
        </article>

        <article className='about__card' onClick={() => window.location.href = "#portfolio"}>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>3+ completed</small>
        </article>

      </div>

    {/* </div> */}
  </div>

   {/* ===== EDUCATION POPUP ===== */}
      {showEducation && (
        <div className="edu__modal">
          <div className="edu__modal-content">

            <span 
              className="edu__close"
              onClick={() => setShowEducation(false)}
              >
              ✕
            </span>

            <h2>My Education</h2>

            <div className="edu__item">
              <img src={mite} alt="MITE Logo" className='edu__logo' />
              <div>
              <h3>Master of Computer Applications (MCA)</h3>
              <a href="https://mite.ac.in/" target="_blank" className="college__name">Mangalore Institute of Technology & Engineering</a>
              <small className='cgpa'>2023 - 2025 • CGPA: 7.92</small>
              </div>
            </div>

            <div className="edu__item">
              <img src={Milagres} alt="Milagres Logo" className='edu__logo'/>
              <div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <a href="https://milagrescollegekallianpur.edu.in/" target="_blank" className="college__name">Milagres College Kallianpur</a>
              <small className='cgpa'>2020 - 2023 • CGPA: 6.51</small>
              </div>
            </div>

          </div>
        </div>
      )}



</section>


)
}

export default About;







// <section id='about'>
//   <h5>Get To Know</h5>
//   <h2>About Me</h2>

//   <div className='container about__container'>
//     <div className="about__me">
//       <div className="about__me-image">
//         <img src={ME} alt="About Image " />
//       </div>
//     </div>

//     <div className="about__content">
//       <div className="about__cards"> 

//         <article className='about__card'>
//           <FaUserGraduate className='about__icon'/>
//           <h5>Education</h5>
//           <small>MCA Graduate - 2025</small>
//         </article>

//         <article className='about__card'>
//           <LuBrainCog className='about__icon'/>
//           <h5>Skills</h5>
//           <small>Java • Python • MERN • Cybersecurity</small>
//         </article>

//         <article className='about__card'>
//           <VscFolderLibrary className='about__icon'/>
//           <h5>Projects</h5>
//           <small>4+ completed</small>
//         </article>

//       </div>

//       <p>
//         I recently completed my Master of Computer Applications (MCA), where I built a strong 
//         foundation in software development and cybersecurity fundamentals. During my academic 
//         journey, I worked on projects involving web development, vulnerability assessment, and 
//         network analysis.</p>

//       <p>
//         I am passionate about cybersecurity and full-stack development, and I enjoy exploring 
//         tools like Nmap, Wireshark, Burp Suite, and Packet Tracer to understand real-world 
//         security scenarios. I am now looking for an opportunity to start my professional career 
//         where I can learn, grow, and contribute to meaningful projects.
//       </p>

//       <a href="#contact" className='btn btn-primary'>Let's Talk</a>

//     </div>
//   </div>
// </section>