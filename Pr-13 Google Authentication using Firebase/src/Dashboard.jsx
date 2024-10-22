import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = async() => {
        try{
            await signOut(auth)
            alert("Logout succesfully")
            navigate('/')
        }
        catch(err){
            console.log(err);
            return false
            
        }
    }
    return (

        <>
         <div className="container-fluid" style={{backgroundImage:"url('../public/red.jpg')",backgroundPosition:"center",backgroundSize:"cover"}} >
    <div className="row">
    <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}} >
        <div className="login-card shadow rounded-2 d-flex justify-content-center align-items-center bg-white px-2" style={{width:"35%",height:"300px"}}>
           <div className="d-flex justify-content-center align-items-center " style={{flexDirection:"column"}}>
            <h2 style={{textAlign:"center"}} className='pb-3'>Sign out with your Google Account</h2>
            <button className='btn btn-danger text-white' onClick={()=> handleLogout()}>Logout</button>   

           </div>
        </div>
        </div>
    </div></div>
        
 </>
    )
}

export default Dashboard
