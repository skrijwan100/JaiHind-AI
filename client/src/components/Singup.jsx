import React, { useState } from 'react'


export default function Singup() {
    const [useremail, setUseremail] = useState({ email: "" })
    const handlesubmit = async (e) => {
        e.preventDefault();
        const url = `${import.meta.env.VITE_BACKEND_URL}/v1/api/userauth/sendmail`
        const responce = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: useremail.email })
        })
        const data = await responce.json()
        console.log(data)
    }
    const onchange = (e) => {
        setUseremail({ ...useremail, [e.target.name]: e.target.value })
    }

    return (
        <div >
            <div className="box" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh" }}>
                <div style={{height:"400px",width:"330px",display:"flex",justifyContent:"center",alignItems:"center",background:"#00000045",boxShadow:"8px 6px 4px 0px #000000b5",borderRadius:"15px"}}>
                    <form onSubmit={handlesubmit}>
                        <input name="email" onChange={onchange} value={useremail.email} style={{ width: "300px" }} placeholder="Enter your email" className="input" type="email" />
                        <div className="btn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button className='OTPbtn' type='submit' style={{ marginTop: "19px" }} >
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
                                <span>Verify your email</span>
                            </button>

                        </div>

                    </form>
                </div>


            </div>
        </div>
    )
}
