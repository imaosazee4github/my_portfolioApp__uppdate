/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import "./Testimonials.css"
 import AVTA1 from '../../assets/avater.jpeg'
  import AVTA2 from '../../assets/avater2.jpg'
  import AVTA3 from '../../assets/avater3.jpg'
  import AVTA4 from '../../assets/avater4.jpeg'

  // import Swiper core and required modules
import {Pagination,Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  const data = [
    {
      avatar: AVTA1,
      name: 'Kelvin',
      review: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
      avatar: AVTA2,
      name: 'Helen',
      review: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
      avatar: AVTA3,
      name: 'katrina',
      review: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'

    },
    {
      avatar: AVTA4,
      name: 'Katherine',
      review: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },

  ]
  return (
    <section id='testimonials'>  
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className='container testimonials__container'
    // install Swiper modules
    modules={[Pagination, Navigation]}
    spaceBetween={40}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}

  >
     {
      data.map(({avatar, name, review}, index) => {
        return(
          <SwiperSlide key={index} className='testimonial'>
        <div className='client__avatar'>
          <img src={avatar} alt='Avatar One'/>
        </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client___review'>{review}</small>
      </SwiperSlide>
        )
      })
     }
      </Swiper>
  </section>
  
  )
}

export default Testimonials