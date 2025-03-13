import React from 'react'
import { Link } from 'react-router'
export default function Navbar() {
    return (
        <div>
            <nav className='flex justify-around'>
          <button className='loginbtn' style={{ marginTop:"10px", height: "40px", width: "100px", borderRadius: "10px", outline: "none", border: "none", backgroundColor: "white", cursor: "pointer", color: "#680ce7" }}>Login</button>
          <Link to="/singup"> <button className='loginbtn' style={{ marginTop:"10px", height: "40px", width: "100px", borderRadius: "10px", outline: "none", border: "none", backgroundColor: "white", cursor: "pointer", color: "#680ce7" }}>Singup</button></Link>
            </nav>
        </div>
    )
}
