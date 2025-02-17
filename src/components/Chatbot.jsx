import { useState } from "react";
import logo from "../assets/JaiHindAi1.png"
import { TypeAnimation } from 'react-type-animation';
export default function Chatbot() {
  const [messages, setMessages] = useState([
    // { text: "Hello! How can I assist you?", sender: "bot" }
  ]);
  const [hellomessage,sethellomessage]=useState(true)
  const [input, setInput] = useState("Who are you what can you do?");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    sethellomessage(false)
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulating AI response (Replace this with API call)
    setTimeout(() => {
      if(input==="কেমন আছেন?"){

       return setMessages(prev => [...prev, { text:"আমি ভালো আছি। তুমি কেমন আছো? আজ আমি তোমাকে কিভাবে সাহায্য করতে পারি?", sender: "bot" }]);
      }
      if(input==="তুমি কি তামিল ভাষা জানো?"){

        return setMessages(prev => [...prev, { text: "হ্যাঁ, আমি তামিল ভাষা জানি।(ஆமாம், எனக்கு தமிழ் தெரியும்.)", sender: "bot" }]);
      }
      if(input==="Who are you what can you do?"){
        return setMessages(prev => [...prev, { text: "Namaste(नमस्ते)!!  I am an Ai made by India. I know very well Indian multiple language like Bengali(বাংলা), Hindi(हिंदी),Tamil(தமிழ்),Marathi(मराठी). I know about Indian culture. I can help to farming in your comfortable language. Those are special ability and i also help you in coding or nay idea also i guide you preparation in NEET, JEE, UPSC exam. Now tell me how can i help you today ?(अब बताओ आज मैं तुम्हारी क्या मदद कर सकता हूँ?)", sender: "bot" }]);
      }
      if(input==="Taj Mahal kiya ha ?"){
        return setMessages(prev => [...prev, { text:"samraat shaahajahaan dvaara apanee patnee mumataaj kee yaad mein banavaaya gaya taajamahal, mugal viraasat ka ek vaastushilp chamatkaar hai aur aagara mein ek yoonesko vishv dharohar sthal hai.", sender: "bot" }]);
        
      }
      if(input==="who is Ankita?"){
        return setMessages(prev => [...prev, { text:"Sob thake faltu akta maya duniyar kaj nai kono sudhu kahi phone dhake ar ghmai. and a good boy name rijwan or palli pora ai gan ta gai `vogoban pora chi ami kar palli` but jai hok aktu holi se ai faltu tar jonno life happy thake.so thank you darling", sender: "bot" }]);
      }
      else{
        return setMessages(prev => [...prev, { text: "I am not a trend AI.I can only answer some spefic question 1.তুমি কি তামিল ভাষা জানো? 2.কেমন আছেন? 3.Who are you what can you do? 4.Taj Mahal kiya ha ?", sender: "bot" }]);
      }
    }, 1000);
  };

  return (
    <div className="phonesize flex flex-col  mx-auto  bg-[#1B1B2F] rounded-lg shadow-lg  h-[89vh] w-[60vw] border-2 border-[#00E5FF]" style={{ marginTop: "8px", padding: "7px" }}>
      <div className="flex-1 overflow-y-auto mb-2 space-y-2" >
        <div className={`flex flex-col-reverse  justify-center items-center ${hellomessage?"h-[100%]":""}`} style={{fontFamily:"Tektur",fontSize:"30px",fontWeight:"600",color:"#58f5ff"}}>
        {hellomessage?<TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Namaste! Main aapki kaise madad kar sakta hoon?",
                7000, // wait 1s before replacing "Mice" with "Hamsters"
                `Hello! How can I assist you?`,
                3000
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
