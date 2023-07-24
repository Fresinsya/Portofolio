import React from 'react'
import './Contact.css'
import Image from 'next/image'


const page = () => {
    return (
        <div className='contact' style={{}}>
          <Image id='amplop' src="/asset/amplop.png" width={350} height={350} alt="coba" />
          <Image id='kertas' src="/asset/card.jpg" width={550} height={330}  alt="coba" />
          
          <button class='btn'>facebook</button>
          
        </div>
    )
}

export default page