import React from 'react'
import './Navbar.css'
import 'react-icons/gi'
import { GiClover } from 'react-icons/gi'

const Navbar = () => {
  return (
    <main className='navbar'>
      <header>
        <nav role='navigation'>
          <ul>
            <li><a href="#">Home</a></li>
            {/* <li><a href="#"></a></li> */}
            <li><a href="#">Education</a></li>
            <li id="heart-trigger" class="heart heart-trigger">
              <GiClover />
            </li>
            <li><a href="#">Portofolio</a></li>
            {/* <li><a href="#"></a></li> */}
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </main>
  )
}

export default Navbar