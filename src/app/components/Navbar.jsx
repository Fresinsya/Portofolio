import React from 'react'
import './Navbar.css'
import 'react-icons/gi'
import { GiClover } from 'react-icons/gi'
import Link from 'next/link'

const Navbar = () => {
  return (
    <main className='navbar'>
      <header>
        <nav role='navigation'>
          <ul>
            <li><Link href="/">Home</Link></li>
            {/* <li><Link href="#"></Link></li> */}
            <li><Link href="/education">Education</Link></li>
            <li id="heart-trigger" style={{color: "white"}} className="heart heart-trigger">
              <GiClover />
            </li>
            <li><Link href="/portofolio">Portofolio</Link></li>
            {/* <li><Link href="#"></Link></li> */}
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </main>
  )
}

export default Navbar