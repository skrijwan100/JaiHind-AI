import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function Textwrite() {
  return (
    <div>
      <header className='text-center'>
      <div className='flex justify-center'>

      {/* <img src={logo} alt="This is logo"  style={{width:"100px",borderRadius:"50%",height:"100px"}}/> */}
      </div>
      <div className="wish">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am JaiHind AI',
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                `Bharat’s Own Intelligence`,
                3000
              ]}
              wrapper="b"
              speed={40}
              repeat={Infinity}
              className='headtext'
              style={{ fontSize: "40px",color:"#08ff00",fontFamily:"play"}}
            /></div></header>
    </div>
  )
}
