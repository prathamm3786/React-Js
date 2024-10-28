import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteUsers } from '../Redux/Action/crudAction'

const ViewUsers = () => {
    const users = useSelector(state => state.crud.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const deleteUser= (id) => {
        dispatch(DeleteUsers(id))
        alert("Record Deleted")

    }
    return (
        <>
        <div className="" align="center">
            <h2>View Users</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) => {
                            return (
                                <tr key={++i}>
                                    <td>{++i}</td>
                                    <td>{u.name}</td>
                                    <td>{u.phone}</td>
                                <td>
                                    <button onClick={()=> deleteUser(u.id)}>Delete</button>
                                    <button onClick={()=> navigate(`/edit`,{state:u})}>Edit</button>

                                </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to={`/`}>Add Users</Link>
        </>
    )
}

export default ViewUsers
