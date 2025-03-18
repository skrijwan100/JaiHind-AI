import  { useEffect } from 'react'
import Swal from 'sweetalert2';
import "../App.css"
import { useNavigate } from 'react-router-dom';
export default function Modal(props) {
//   const naviget=useNavigate()
    const logout= async(e)=>{
        e.preventDefault();
        const url=`${import.meta.env.VITE_BACKEND_URL}/v1/api/userauth/logout`
        const responce= await fetch(url,{
            method:"POST",
            headers:{
                 "Content-Type": "application/json"
            },
            credentials: "include", 
        })
        const data= await responce.json()
        console.log(data)
        if(data.status){
            location.reload()
        }
    }
//     const userhistory=async()=>{
//       props.startLoader()   
//       naviget("/history")
//       Swal.close()
//     }
  return (
    useEffect(()=>{
        if(props.usermodal){
            Swal.fire({
                position: "top-end",
                title:`Hi ${props.usermodal.name}` ,
                html: `
                  <div style="text-align: center; font-size: 1.1em;">
                    <p style=" margin-top: 20px;"><strong>Email:</strong> ${props.usermodal.email}</p>
                    <button id="logout-btn" class='logoutbtn'>Logout</button>
                    <button id="history-btn" class='historybtn'>Upadete profile</button>
                  </div>
                `,
                showCloseButton: true,
                confirmButtonText: 'close',
                customClass: {
                  popup: 'animated fadeInDown', // Add animation if desired
                },
                didOpen: () => {
                    // Add event listener to the logout button
                    document.getElementById('logout-btn').addEventListener('click', logout);
                    // document.getElementById('history-btn').addEventListener('click', userhistory);
                },
              });
        }

    }, [props.usermodal])
  )
  return null;
}
