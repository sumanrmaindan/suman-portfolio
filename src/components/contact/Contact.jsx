import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

// ⭐ import image icons
import gmailIcon from "../../assets/social-logo/gmail.png";
import whatsappIcon from "../../assets/social-logo/whatsapp.png";
import linkedinIcon from "../../assets/social-logo/linked in.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_el9jnki', 'template_c2zhpjb', form.current, {
        publicKey: 'RbV5tw1iX_gPXROpS',
      })
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        },
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        {/* LEFT CONTACT CARDS */}
        <div className="contact__options">

          {/* Gmail */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sumanrmaindan@gmail.com&su=Portfolio Contact&body=Hi Suman"
            target="_blank"
            rel="noreferrer"
            className="contact__option"
          >
            <img src={gmailIcon} alt="gmail" className="contact__icon-img" />
            <h4>Email</h4>
            <h5>sumanrmaindan@gmail.com</h5>
            <span className="contact__button">Send A Message</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://api.whatsapp.com/send?phone=7975347374"
            target="_blank"
            rel="noreferrer"
            className="contact__option"
          >
            <img src={whatsappIcon} alt="whatsapp" className="contact__icon-img" />
            <h4>WhatsApp</h4>
            <h5>Chat with me</h5>
            <span className="contact__button">Send A Message</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/sumanrm"
            target="_blank"
            rel="noreferrer"
            className="contact__option"
          >
            <img src={linkedinIcon} alt="linkedin" className="contact__icon-img" />
            <h4>LinkedIn</h4>
            <h5>Suman</h5>
            <span className="contact__button">Send A Message</span>
          </a>

        </div>

        {/* RIGHT CONTACT FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email Address' required />
          <textarea name="message" rows={7} placeholder='Your Message' required></textarea>

          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact;

















// import React, { useRef } from 'react'
// import './contact.css'
// import { SiGmail } from "react-icons/si";

// import { BsWhatsapp } from "react-icons/bs";
// import { GrLinkedin } from "react-icons/gr";
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_el9jnki', 'template_c2zhpjb', form.current, {
//         publicKey: 'RbV5tw1iX_gPXROpS',
//       })
//       .then(
//         () => {
//           alert("Message Sent Successfully ");
//           e.target.reset();
//         },
//         (error) => {
//           alert("Something went wrong ");
//           console.log(error.text);
//         },
//       );
//   };

//   return (
//     <section id='contact'>
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>

//       <div className="container contact__container">

//         {/* LEFT CONTACT CARDS */}
//         <div className="contact__options">

//           <a 
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=sumanrmaindan@gmail.com&su=Portfolio Contact&body=Hi Suman" target="_blank" rel="noreferrer" className="contact__option" >
//             <SiGmail className='contact__option-icon'/>
//             <h4>Email</h4>
//             <h5>sumanrmaindan@gmail.com</h5>
//             <span className="contact__button">Send A Message </span>
//           </a>

//           <a href="https://api.whatsapp.com/send?phone=7975347374" target="_blank" rel="noreferrer" className="contact__option">
//             <BsWhatsapp className='contact__option-icon'/>
//             <h4>WhatsApp</h4>
//             <h5>Chat with me</h5>
//             <span className="contact__button">Send A Message</span>
//           </a>

//           <a href="https://linkedin.com/in/sumanrm"target="_blank"rel="noreferrer"className="contact__option">
//             <GrLinkedin className='contact__option-icon'/>
//             <h4>LinkedIn</h4>
//             <h5>Suman </h5>
//             <span className="contact__button">Send A Message</span>
//           </a>

//         </div>

//         {/* RIGHT CONTACT FORM */}
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name='name' placeholder='Your Full Name' required />

//           <input type="email" name='email' placeholder='Enter Your Email Address' required />

//           <textarea name="message" rows={7} placeholder='Your Message' required></textarea>

//           <button type='submit' className='btn btn-primary'>
//             Send Message
//           </button>
//         </form>

//       </div>
//     </section>
//   )
// }

// export default Contact;
