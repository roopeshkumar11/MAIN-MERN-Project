
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar.jsx"
import Footer from "../Component/Footer.jsx"
import CardMessage from "../Component/Card_message";

function Adminpage() {
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/getalldmessage");
        setMessages(response.data); 
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []); 
console.log(messages.Name)

  return (
    <>
 <Navbar/>
    <div className="bg-black text-gray-300 min-h-screen">
      <h1 className="text-4xl font-bold text-center p-5">Admin</h1>

      <div className="flex flex-col items-center gap-4">
        {messages.length > 0 ? (
          messages.map((msg,index) => (
            <CardMessage
            key={msg.id || index}
              name={msg.Name}
              email={msg.Email}
              service={msg.service}
              message={msg.Message}
            
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No messages found</p>
        )}
      </div>
    </div>
    <Footer/>
    
    </>
  );
}

export default Adminpage;
