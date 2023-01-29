/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import img1 from '../../assets/demo1.jpg'
import img2 from '../../assets/project2.jpg'
import img3 from '../../assets/demo1.jpg'

const data = [
  {
    id: 1,
    title: 'Star Wars',
    image: img1,
    github: 'https://github.com',
    liveDemo: 'http://starwars-osazee.netlify.app'
  },
  {
    id: 2,
    title: 'Star Wars',
    image: img2,
    github: 'https://github.com',
    liveDemo: 'http://starwars-osazee.netlify.app'
  },
  {
    id: 3,
    title: 'Star Wars',
    image: img3,
    github: 'https://github.com',
    liveDemo: 'http://starwars-osazee.netlify.app'
  },
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn_primary' target='_blank'>Live Demo</a></div>
              </article>
            )
       })
        }
      </div>
    </section>
  )
}

export default portfolio