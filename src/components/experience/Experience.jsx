import React from 'react'
import './experience.css'

import html from '../../assets/html-5.png'
import css from '../../assets/css-3-logo.png'
import js from '../../assets/js.png'
import react from '../../assets/react.svg'

import java from '../../assets/java-logo.svg'
import py from '../../assets/python.svg'
import mongodb from '../../assets/mongodb.svg'

import kali from '../../assets/kalilinux.svg'
import nmap from '../../assets/nmap-logo.svg'
import burp from '../../assets/burpsuite-logo.svg'
import wire from '../../assets/wireshark-logo.svg'
import sql from '../../assets/sqlmap-logo.svg'
import scan from '../../assets/security-audit.png'

import vs from '../../assets/vs-code.svg'
import linux from '../../assets/linux-tux.svg'
import vb from '../../assets/Virtualbox_logo.png'
// import docker from '../../assets/docker.svg'


// ⭐ reusable component (makes code clean)
const Skill = ({ img, name }) => (
  <article className="experience__details">
    <div className="skill__icon">
      <img src={img} alt={name} />
    </div>
    <h4>{name}</h4>
  </article>
)

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Tech Stack</h5>
      <h2>Skills & Tools</h2>

      <div className="container experience__container">

        {/* FRONTEND */}
        <div className="experience__box">
          <h3>Frontend</h3>
          <div className="experience__content">
            <Skill img={html} name="HTML" />
            <Skill img={css} name="CSS" />
            <Skill img={js} name="JavaScript" />
            <Skill img={react} name="React" />
            <Skill img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" name="Bootstrap" />
            <Skill img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" name="Tailwind CSS" />
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience__box">
          <h3>Backend</h3>
          <div className="experience__content">
            <Skill img={java} name="Java" />
            <Skill img={py} name="Python" />
            <Skill img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" name="Node.js" />
            <Skill img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" name="MySQL" />
            <Skill img={mongodb} name="MongoDB" />
          </div>
        </div>

        {/* CYBERSECURITY */}
        <div className="experience__box">
          <h3>Cybersecurity</h3>
          <div className="experience__content">
            <Skill img={kali} name="Kali Linux" />
            <Skill img={nmap} name="Nmap" />
            <Skill img={wire} name="Wireshark" />
            <Skill img={burp} name="Burp Suite" />
            <Skill img={sql} name="SQL Injection" />
            <Skill img={scan} name="Vulnerability Scanning" />
          </div>
        </div>

        {/* TOOLS */}
        <div className="experience__box">
          <h3>Tools</h3>
          <div className="experience__content">
            <Skill img={vs} name="VS Code" />
            <Skill img={vb} name="VirtualBox" />
            <Skill img={linux} name="Linux" />
            <Skill img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg" name="Google Colab" />
            <Skill img ="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" name="Docker" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience






















// import React from 'react'
// import './experience.css'
// import { MdVerified } from "react-icons/md";


// const Experience = () => {
//   return (
//     <section id='experience'>
//       <h5>My Tech Stack</h5>
//       <h2>Skills & Tools  </h2>
//       <div className="container experience__container">
//         <div className="experience__frontend">
//           <h3>Frontend Development</h3>
//           <div className="experience__content">
//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>HTML</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>CSS</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>Java script</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>Bootstarp</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>tailwind</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>            
            
//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>React</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>
//           </div>
//         </div>

//         {/* End of Frontend */}

//         <div className="experience__backend">
          
//           <h3>Backend Development</h3>
//           <div className="experience__content">
//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>Node JS</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>Mongo DB</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>PHP</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>MySQL </h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <MdVerified className='experience__details-icon'/>
//               <div>
//                 <h4>Python</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>            
            
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience