import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/IMG-20250406-WA0043.jpg'
// import AVTR1 from '../../assets/IMG-20250406-WA0043.jpg'
// import AVTR1 from '../../assets/IMG-20250406-WA0043.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data =[
  {
    avatar: AVTR1,
    name: 'Suman',
    review: 'it is all so good work to see this in the website and the projexts are best'
  },

  {
    avatar: AVTR1,
    name: 'Suman',
    review: 'it is all so good work to see this in the website and the projexts are best'
  },

  {   
    avatar: AVTR1,
    name: 'Suman',
    review: 'it is all so good work to see this in the website and the projexts are best'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review Form Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 

      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>


        {
          data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials