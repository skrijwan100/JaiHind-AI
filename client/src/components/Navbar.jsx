import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Cookies from 'js-cookie';
import jaiHind from "../assets/JaiHindAi1.png"

export default function Navbar({showuser}) {
    // const isAuthenticated = Cookies.get('auth-token');
    const [userdata, setuserdata] = useState()
    const [pic,setpic]=useState()
    const [isAuthenticated,setisAuthenticated]=useState(null)
    useEffect(() => {
        const Authenticated = Cookies.get('auth-token');
        setisAuthenticated(Authenticated)
        const fecthuserpic = async () => {
            const url = `${import.meta.env.VITE_BACKEND_URL}/v1/api/userauth/getuser`
            const responce = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
            })
            const data = await responce.json()
            console.log(data)
            setuserdata(data)
            setpic(true)
        }
        fecthuserpic()
    }, [])
    const getuserdata=(e)=>{
        e.preventDefault();
        showuser(userdata.message.name,userdata.message.email)
        

    }
    return (
        <div>
         
            {isAuthenticated ? <nav>
                {pic && userdata ? <div className='flex justify-center'>
                    <img onClick={getuserdata} style={{ height: "60px", width: "60px", borderRadius: "50%", cursor: "pointer" }} src={userdata.message.profilePic} alt="User Pic" />
                </div> : <div className='flex justify-center'>
                    <img style={{ height: "60px", width: "60px", borderRadius: "50%", cursor: "pointer" }} src={jaiHind} alt="User Pic" />
                </div>}
            </nav> : <nav className='flex justify-around'>
                <Link to="/login" ><button className='loginbtn' style={{ marginTop: "10px", height: "40px", width: "100px", borderRadius: "10px", outline: "none", border: "none", backgroundColor: "white", cursor: "pointer", color: "#680ce7" }}>Login</button></Link>
                <Link to="/singup"> <button className='loginbtn' style={{ marginTop: "10px", height: "40px", width: "100px", borderRadius: "10px", outline: "none", border: "none", backgroundColor: "white", cursor: "pointer", color: "#680ce7" }}>Singup</button></Link>
            </nav>}
        </div>
    )
}
