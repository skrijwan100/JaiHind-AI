import React, { useState } from 'react'
import { handleError, handleSuccess } from './Alert'
import axios from "axios";
import loderpic from "../assets/loder.gif"
import { useNavigate } from 'react-router';

export default function Mainsingup({ authemail }) {
    const [userauth, setUserauth] = useState({ fullname: "", password: "", repassword: "" })
    const [selectedFile,setSelectedFile]=useState(null)
     const [loder,setloder]=useState(false)
    const naviget= useNavigate()
    const onchange = (e) => {
        setUserauth({ ...userauth, [e.target.name]: e.target.value })
    }
    const handleupload=(e)=>{
        setSelectedFile(e.target.files[0]);
    }
    const handlesubmit= async(e)=>{
        e.preventDefault();
        setloder(true)
        if(userauth.password!=userauth.repassword){
            return handleError("password not macthed.")
        } 
        const formData = new FormData();
        if(selectedFile){

            formData.append("profilepic", selectedFile); 
        }
        const userDetails =({
            name:userauth.fullname,
            email:authemail,
            password:userauth.password,
        })
        formData.append("userDetails", JSON.stringify(userDetails));
        try {
            const responce= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/v1/api/userauth/register`,formData,{
                headers:{
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log("Upload Success:", responce.data);
            if(responce.data.auth){
                handleSuccess("Account was created")
                naviget("/login")
            }
            setloder(false)
            
        } catch (error) {
            console.log("Upload Error:", error);
            handleError("Some error happend")
            setloder(false)
        }
    }

    return (
        <div>

            <div className="box" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh" }}>

                <div style={{ height: "540px", width: "330px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#00000045", boxShadow: "8px 6px 4px 0px #000000b5", borderRadius: "15px" }}>
                    <h1 className='text-3xl font-bold text-white' style={{ marginBottom: "25px" }}>Create an account</h1>
                    <form onSubmit={handlesubmit} className='flex justify-center flex-col gap-5' >
                        <input name="fullname" onChange={onchange} value={userauth.fullname} style={{ width: "300px" }} placeholder="Enter full name" className="input" type="text" required minLength={4} />
                        <input name="email" style={{ width: "300px" }} value={authemail} placeholder="Enter email" className="input" type="email" readOnly />

                        <input name="password" onChange={onchange} value={userauth.password} style={{ width: "300px" }} placeholder="Enter password" className="input" type="password" required minLength={6} />
                        <input name="repassword" onChange={onchange} value={userauth.repassword} style={{ width: "300px" }} placeholder="conform password" className="input" type="password" required />
                        <h1 className="text-white text-xl font-semibold text-center">Upload your Profile Pic</h1>
                        <div>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleupload}
                                className="file:bg-blue-600 file:text-white file:px-4 file:py-2 file:border-none file:rounded-md file:cursor-pointer file:hover:bg-blue-700 bg-gray-800 text-gray-300 rounded-md p-2"
                            />
                        </div>

                        <div className="btn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {loder?<img style={{width:"190px"}}src={loderpic} alt="loder" />:<button className='OTPbtn' type='submit'  >
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <span>Creact account</span>
                            </button>}

                        </div>

                    </form>
                </div>


            </div>
        </div>
    )
}
