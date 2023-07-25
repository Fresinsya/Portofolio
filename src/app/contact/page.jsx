import React from 'react'
import './Contact.css'
import Image from 'next/image'


const page = () => {
  return (
    <body>
      <h1>Contact Us</h1>
      
      <div className='contact '>
        
        <button className='btn'><a className='btn2 fa' href="https://github.com/Fresinsya" target="_blank">Github</a></button>
        <button className='btn'><p className='btn2 ig'>Instagram</p></button>
        <button className='btn'><p className='btn2 wa'>Whatsapp</p></button>

      <div className='email'>
        <Image id='amplop' src="/asset/amplop.png" width={350} height={350} alt="coba" />
        <Image id='kertas' src="/asset/card.jpg" width={550} height={330} alt="coba" />
      </div>

      </div>

    </body>
  )
}

export default page