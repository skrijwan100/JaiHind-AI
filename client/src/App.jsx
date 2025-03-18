import './App.css'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Chatbot from './components/Chatbot'
import Navbar from './components/Navbar';
import Singup from './components/Singup';
import Login from './components/Login';
import Mainsingup from './components/Mainsingup';
import { ToastContainer } from 'react-toastify'
import { Flip } from 'react-toastify';
import { useState } from 'react';
import Usermodle from "./components/Usermodle"

function App() {
  const [authemail,setAuthemail]=useState({email:""})
  const [usermodal,setusermodal]=useState(null)

  const setemail=(useremail)=>{
    setAuthemail(useremail)
  }
  const showuser=(name,email)=>{

    setusermodal({
      name:name,
      email:email,
    })
  }
  return (
    <>
    <BrowserRouter>
        <Navbar  showuser={showuser}/>
        <ToastContainer transition={Flip}/>
        <Usermodle usermodal={usermodal}/>
    
    
    <Routes>
      <Route path='/singup' element={<Singup setemail={setemail}/>} />
      <Route path='/' element={<Chatbot/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/createacc' element={<Mainsingup  setemail={setemail} authemail={authemail}/>}/>

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
