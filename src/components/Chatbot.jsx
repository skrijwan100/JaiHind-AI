import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulating AI response (Replace this with API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "This is an AI response!", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col  mx-auto  bg-[#513196] rounded-lg shadow-lg  h-[75vh] w-[60vw] border-2 border-[#92ff00]" style={{marginTop:"20px",padding:"7px"}}>
      <div className="flex-1 overflow-y-auto mb-2 space-y-2" >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg  ${msg.sender === "user" ? "bg-blue-500 flex text-white self-end" : "bg-gray-300 text-black self-start"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
