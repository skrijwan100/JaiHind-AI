import { useState } from 'react'
import './App.css'
import Chatbot from './components/chatbot'
import { TypeAnimation } from 'react-type-animation';

function App() {

  return (
    <>
    <header className='text-center'>
      <div className='flex justify-center'>

      {/* <img src={logo} alt="This is logo"  style={{width:"100px",borderRadius:"50%",height:"100px"}}/> */}
      </div>
      <div className="wish">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am JaiHind AI',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                `Bharat’s Own Intelligence`,
                1000
              ]}
              wrapper="b"
              speed={40}
              repeat={Infinity}
              style={{ fontSize: "40px",color:"#08ff00",fontFamily:"play"}}
            /></div></header>
    <div className="main flex justify-center ">
      <Chatbot/>
    </div>
    </>
  )
}

export default App
