import React from 'react'
import './Contact.css'
import Image from 'next/image'


const page = () => {
  return (
    <body>
      <h1 className='jcontact'>Contact Us</h1>
      
      <div className='contact '>
        
        <button className='btn'><a className='btn2 fa' href="https://github.com/Fresinsya" target="_blank">Github</a></button>
        <button className='btn'><a className='btn2 ig' href="https://www.instagram.com/vfresinsya/" target="_blank">Instagram</a></button>
        <button className='btn'><a className='btn2 wa' href="http://wa.me/62895353720203" target="_blank">Whatsapp</a></button>

      <div className='email'>
        <Image className='amplop' src="/asset/amplop.png" width={450} height={450} alt="coba" />
        <Image className='kertas' src="/asset/card.jpg" width={850} height={530} alt="coba" />
      </div>

      </div>

    </body>
  )
}

export default page