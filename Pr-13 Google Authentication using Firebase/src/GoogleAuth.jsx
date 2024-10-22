import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, Authprovider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const GoogleAuth = () => {
const navigate = useNavigate()
    const handleSubmit= async() =>{
        try{
            let data = await signInWithPopup(auth,Authprovider)
            navigate('/dashboard')
        }
        catch(err){
            console.log(err);
            return false
            
        }
    }
  return (
 <>
 <div className="container-fluid" style={{backgroundImage:"url('../public/blue.jpg')",backgroundPosition:"center",backgroundSize:"cover"}} >
    <div className="row">
    <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}} >
        <div className="login-card shadow rounded-2 d-flex justify-content-center align-items-center bg-white px-2" style={{width:"35%",height:"300px"}}>
           <div className="d-flex justify-content-center align-items-center " style={{flexDirection:"column"}}>
            <h2 style={{textAlign:"center"}} className='pb-3'>Sign in with your Google Account</h2>
           <button className='d-flex align-items-center btn p-0 overflow-hidden btn-primary' style={{width:"200px"}} onClick={()=> handleSubmit()}> <img src="../public/google.png" className='bg-white p-1 rounded-1' style={{width:"40px"}} alt="" /><span className='ps-1'>Log in with Google</span></button>
           </div>
        </div>
        </div>
    </div></div></>
  )
}

export default GoogleAuth
