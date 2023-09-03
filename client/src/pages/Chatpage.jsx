import React, { useEffect,useState } from 'react'
import axios from 'axios';
const Chatpage = () => {
  const [chats,setChats]=useState([]);
  const fetchChat=async()=>{
    const {data}=await axios.get('/api/chat');
   setChats(data);
  }
  useEffect(()=>{
    fetchChat();
  },[]);
  return (
    <div>Chatpage</div>
  )
}

export default Chatpage