import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { EditUser } from '../Redux/Action/crudAction';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const EditUsers = () => {
    const location = useLocation()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const [editid , setEditId] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(()=>{
        setName(location?.state?.name)
        setPhone(location?.state?.phone)
        setEditId(location?.state?.id)
    },[location?.state])
    const handleSubmit = (e) => {
     e.preventDefault()
        let obj ={
            id : editid,
            name : name,
            phone : phone
        }
        dispatch(EditUser(obj))
        alert("Record Update")
        navigate("/view")
    }
    return (
        <>
        <div align="center">
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>Phone :- </td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
            <Link to={`/view`}>View Users</Link>
        </>
    )
}

export default EditUsers
