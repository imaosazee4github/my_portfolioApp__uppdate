/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUserPlus} from 'react-icons/fi'
import {BiBookOpen} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {FcContacts} from 'react-icons/fc'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'about' :  ''}><FiUserPlus /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'experience' :  ''}><BiBookOpen /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'services' :  ''}><RiServiceLine /></a>
      <a href='#contacts' onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'contacts' :  ''}><FcContacts /></a>
    
    </nav>
    </>
  )
}

export default Nav