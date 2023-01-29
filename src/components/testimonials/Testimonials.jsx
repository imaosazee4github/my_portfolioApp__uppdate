/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import "./Testimonials.css"
 import AVTA1 from '../../assets/tony.jpg'
  import AVTA2 from '../../assets/godstime.png'
  import AVTA3 from '../../assets/evans.jpeg'
  import AVTA4 from '../../assets/daniel.jpg'

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
      name: 'Izekor Anthony',
      review: 'I highly recommend Osazee as a Node.js developer for his exceptional quality work. He possess deep understanding of Node.js and related technologies, ability to build scalable and high-performance applications, and are highly collaborative team member. Osazee will be a valuable asset to any team.'
    },
    {
      avatar: AVTA2,
      name: 'Omoregie Godstime',
      review: 'I highly recommend Osazee as a software developer, a friend and a leader. He possess exceptional soft skills and good leadership quality, and is a dedicated, hardworking, and a great friend to have. Osazee will be a valuable asset to any team and friendship.'
    },
    {
      avatar: AVTA3,
      name: 'Odeh Osahon Evans',
      review: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'

    },
    {
      avatar: AVTA4,
      name: 'Daniel Iwegbue',
      review: 'I highly recommend Osazee for any future opportunities. He was an exceptional member of our hackathon team, bringing unique skills and a positive attitude. His technical abilities, teamwork, and leadership skills made a significant impact on our projects success. Osazee will be a valuable asset to any team'
    },

  ]
  return (
    <section id='testimonials'>  
    {/* <h5>Review from clients</h5> */}
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