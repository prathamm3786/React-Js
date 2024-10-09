import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'

function Add() {

    const [title,setTitle]=useState("")
    const [dep,setDep]=useState("")
    const [record,setRecord]=useState([])

    useEffect(()=>{
        let data=JSON.parse(localStorage.getItem('course')) || [];
        setRecord(data);
    },[])

    const hanlde = (e) =>{
        e.preventDefault()

        if(!title || !dep){
            alert("all fields required")
            return false;
        }

        let obj={
            id:Math.floor(Math.random()*10000),
            title,
            dep
        }

        let newrecord=[...record,obj];
        localStorage.setItem('course',JSON.stringify(newrecord));
        setRecord(newrecord);
        alert("successfully add...");
        setTitle("");
        setDep("");
    }
    return (
        <div>
            <Header />

            <div className="container" style={{margin:"80px 55px",color:"black"}}>
                <div className="row">
                    <div className="col-lg-6 mx-auto">

                        <form onSubmit={hanlde} className=' p-5' style={{border:"1px solid black",borderRadius:"10px"}}>
                            <div className="mb-3">
                                <label  className="form-label" style={{fontSize:"20px"}}>Title</label>
                                <input type="text" className="form-control" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} value={title}  />
                              
                            </div>
                            <div className="mb-3 mt-5">
                                <label  className="form-label" style={{fontSize:"20px"}}>Description</label>
                                <input type="text" className="form-control" placeholder='Enter Description' onChange={(e) => setDep(e.target.value)} value={dep}  />
                            </div>
                        
                            <button type="submit" className="btn mx-auto d-block btn-dark mt-5">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add
