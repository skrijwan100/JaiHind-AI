import { useState } from "react";
import logo from "../assets/JaiHindAi1.png"
import { TypeAnimation } from 'react-type-animation';
export default function Chatbot() {
  const [messages, setMessages] = useState([
    // { text: "Hello! How can I assist you?", sender: "bot" }
  ]);
  const [hellomessage,sethellomessage]=useState(true)
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    sethellomessage(false)
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulating AI response (Replace this with API call)
    setTimeout(() => {
      if(input==="কেমন আছেন?"){

       return setMessages(prev => [...prev, { text:"আমি ভালো আছি। তুমি কেমন আছো আজ আমি তোমাকে কিভাবে সাহায্য করতে পারি?", sender: "bot" }]);
      }
      if(input==="তুমি কি তামিল ভাষা জানো?")
      return setMessages(prev => [...prev, { text: "হ্যাঁ, আমি তামিল ভাষা জানি।(ஆமாம், எனக்கு தமிழ் தெரியும்.)", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col  mx-auto  bg-[#1B1B2F] rounded-lg shadow-lg  h-[89vh] w-[60vw] border-2 border-[#00E5FF]" style={{ marginTop: "8px", padding: "7px" }}>
      <div className="flex-1 overflow-y-auto mb-2 space-y-2" >
        <div className={`flex flex-col-reverse  justify-center items-center ${hellomessage?"h-[100%]":""}`} style={{fontFamily:"Tektur",fontSize:"30px",fontWeight:"600",color:"#58f5ff"}}>
        {hellomessage?      <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hello!",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                `Hello! How can I assist you?`,
                7000
              ]}
              speed={40}
              repeat={Infinity}
            />:""}
        {hellomessage?<img src={logo} alt="" style={{width:"100px",borderRadius:"50%",height:"100px"}} />:""}
          </div>
        {messages.map((msg, index) => (
          <div
            key={index}
           style={{padding:"5px",marginBottom:"5px"}}
            className={`p-2 rounded-lg  ${msg.sender === "user" ? "bg-blue-500 flex text-white self-end set-text" : "bg-gray-300 text-black self-start"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          style={{padding:"15px",color:"#FFFFFF"}}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border-2 border-[#00E5FF] rounded-l-lg focus:outline-none h-[45px]"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          style={{width:"100px",cursor:"pointer"}}
          className="bg-[#00E5FF] text-black px-4 rounded-r-lg hover:bg-[#88f3ff] "
          >
          Send
        </button>
      </div>
    </div>
  );
}
