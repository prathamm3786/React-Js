import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddUsers } from '../Redux/Action/crudAction';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
     e.preventDefault()
        let obj ={
            id : Math.floor(Math.random()* 100000),
            name : name,
            phone : phone
        }
        dispatch(AddUsers(obj))
        alert("Record Added")
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

export default AddUser
