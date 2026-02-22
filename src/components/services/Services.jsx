import React, { useState } from 'react'
import './services.css'

import c1 from '../../assets/Certificate/Introduction to Cybersecurity certificate.png'
import c2 from '../../assets/Certificate/SAP.jpg'
import c3 from '../../assets/Certificate/python dig fore.png'
import c4 from '../../assets/Certificate/Big-Data.png'
import c5 from '../../assets/Certificate/Internship certificate.png'
import c6 from '../../assets/Certificate/KSCST Certificate.png'

const Services = () => {

  const [popupImg, setPopupImg] = useState(null)

  return (
    <section id='services'>
      <h5>My Learning Journey</h5>
      <h2>My Certificates</h2>

      <div className="container services__container">

        {/* Card 1 */}
        <article className='service'>
          <img src={c1} alt="certificate" onClick={() => setPopupImg(c1)} />
          <div className="certificate__content">
            <h3>Introduction to Cybersecurity</h3>
            <p>Cisco Networking Academy</p>
            <span>Dec 2025</span>
          </div>
        </article>

        {/* Card 2 */}
        <article className='service'>
          <img src={c2} alt="certificate" onClick={() => setPopupImg(c2)} />
          <div className="certificate__content">
            <h3>SAP HackFest</h3>
            <p>National Level Hackathon Participant</p>
            <span>May 2024</span>
          </div>
        </article>

        {/* Card 3 */}
        <article className='service'>
          <img src={c3} alt="certificate" onClick={() => setPopupImg(c3)} />
          <div className="certificate__content">
            <h3>Python Digital Forensics</h3>
            <p>Infosys Springboard</p>
            <span>Mar 2025</span>
          </div>
        </article>

        {/* Card 4 */}
        <article className='service'>
          <img src={c4} alt="certificate" onClick={() => setPopupImg(c4)} />
          <div className="certificate__content">
            <h3>Big Data</h3>
            <p>Infosys Springboard</p>
            <span>Mar 2025</span>
          </div>
        </article>

        {/* Card 5 */}
        <article className='service'>
          <img src={c5} alt="certificate" onClick={() => setPopupImg(c5)} />
          <div className="certificate__content">
            <h3>Cybersecurity Internship</h3>
            <p>DLithe</p>
            <span>Nov 2024 – Jan 2025</span>
          </div>
        </article>

        {/* Card 6 */}
        <article className='service'>
          <img src={c6} alt="certificate" onClick={() => setPopupImg(c6)} />
          <div className="certificate__content">
            <h3>KSCST Project Exhibition</h3>
            <p>Govt. of Karnataka</p>
            <span>Aug 2025</span>
          </div>
        </article>

      </div>

      {/* IMAGE POPUP */}
      {popupImg && (
        <div className="img__popup" onClick={() => setPopupImg(null)}>
          <img src={popupImg} alt="certificate" />
        </div>
      )}

    </section>
  )
}

export default Services


        
        






        
        
        
        
        {/* <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>seed identification, image based seed identification</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>seed identification, image based seed identification</p>
            </li>
          </ul>
        </article> */}

        {/* End of UI/UX */}


        {/* <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>seed identification, image based seed identification</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>seed identification, image based seed identification</p>
            </li>
          </ul>
        </article> */}

        {/* End of Web Development] */}

        {/* <article className='service'>
          <div className="service__head">
            <h3>Contant creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>seed identification, image based seed identification</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>seed identification, image based seed identification</p>
            </li>
          </ul>
        </article> */}

        {/* End of Content creation */}




//       </div>

//     </section>
//   )
// }

// export default Services