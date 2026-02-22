import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project-img/seed.png'
import IMG2 from '../../assets/project-img/kali.png'
import IMG3 from '../../assets/project-img/neuro.png'
import IMG4 from '../../assets/project-img/matrix.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Image-Based Seed Identification',
    desc: 'CNN model that classifies fruit and vegetable seeds from images.',
    github: 'https://github.com/sumanrmaindan/CNN-Based-Seed-Identification',
    demo: 'https://dribbble.com/shots/27113064-Seed-Identification-using-CNN'
  },
  {
    id: 2,
    image: IMG4,
    title: 'Matrix - E-Commerce Website',
    desc: 'E-commerce website for electronic products built with PHP.',
    github: 'https://github.com/sumanrmaindan/matrix-main',
    demo: 'https://dribbble.com/shots/27113097-Matrix-Electronics-E-Commerce-Web-Application'
    
  },
  {
    id: 3,
    image: IMG3,
    title: 'NeuroPulse',
    desc: 'Machine Learning Based Student Mental Health Prediction System',
    github: 'https://github.com/sumanrmaindan/NeuroPulse',
    demo: 'https://dribbble.com/shots/27099971-AI-Powered-Student-Mental-Health-Prediction-NeuroPulse'
  },
  {
    id: 4,
    image: IMG2,
    title: 'IP Spoofing & Information Gathering',
    desc: 'Cybersecurity project simulating reconnaissance and IP spoofing attacks.',
    github: 'https://github.com/sumanrmaindan/Cybersec-Internship',
    demo: 'https://dribbble.com/shots/27112890-Information-Gathering-and-IP-Spoofing-Attack-Demonstration'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, desc, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>

          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>

            <h3>{title}</h3>
            <p className='portfolio__desc'>{desc}</p>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>See More</a>
            </div>

        </article> 
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio