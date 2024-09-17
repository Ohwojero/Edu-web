import React, { useState } from 'react'
import '../../styles/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { asset } from '../../Assets/asset'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const list = [

  {
    name: "Home",
    path: '/'
  },

  {
    name: "About",
    path: '/about'
  },

  {
    name: "Blog",
    path: '/blog'
  },

  {
    name: "Service",
    path: '/service'
  },

  {
    name: "Contact",
    path: '/contact'
  }

]

const Navbar = () => {

  const [navShow, setNavShow] = useState(false);

  return (
  
      <div className='nav-container'>
        <nav>
          <Link to="/" className='logo'>
            <img src={asset.logo} alt="" className='logo' />
          </Link>


          <ul className={`nav-links ${navShow? 'show-nav' : 'hide-nav'}`}>
            {
              list.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavLink to={path} onClick={()=> setNavShow(prev => !prev)}>{name}</NavLink>
                  </li>
                )
              })
            }
          </ul>

          <button className='toggle-btn' onClick={()=> setNavShow(prev => !prev)}>
              {
                navShow ? <IoMdClose /> :<CiMenuBurger/>
              }
          </button>
        </nav>
      </div>
      

  )
}

export default Navbar