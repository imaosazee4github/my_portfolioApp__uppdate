import React from 'react'
import './about.css'
import Me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__img'>
            <img src={Me} alt="About images" /></div>

        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years  of working</small>

            </article>
            {/* <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Clients</h5>
              <small>10</small>

            </article> */}

            <article className='about__card'>
            <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3 +Completed</small>

            </article>
          </div>
          <br />

          <p>
         I am a purposeful and result-oriented Software Developer with over 3 years of development experience. 
         i am a good communicator, reliable, and organized. I am highly adaptive, and inspirational with proven listening and interpersonal skills.
          </p>
          <br />

          <a href='#contacts' className='btn btn-primary'>Contacts</a>
          <a href="#portfolio" className='btn btn-primary'>Portfolio</a>
          </div>
      </div>

    </section>
  )
}

export default about
