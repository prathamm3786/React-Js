import React, { useEffect, useState } from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Fetch = () => {
    const [api, setApi] = useState([]);

    const fetchMethod = () => {
        fetch(`https://dummyjson.com/users`)
            .then(response => response.json())
            .then(Allusers => {
                setApi(Allusers.users);
            });
    };

    useEffect(() => {
        fetchMethod();
    }, []);

    return (
        <div>
            <h1 className="py-3" style={{ margin: "30px 0", fontSize: '40px' }} align="center">
                Users API Using Fetch Method
            </h1>

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" style={{color:"white", backgroundColor:"black"}}>No.</th>
                                    <th scope="col" style={{color:"white", backgroundColor:"black"}}>First Name</th>
                                    <th scope="col" style={{color:"white", backgroundColor:"black"}}>Last Name</th>
                                    <th scope="col" style={{color:"white", backgroundColor:"black"}}>Age</th>
                                    <th scope="col" style={{color:"white", backgroundColor:"black"}}>Gender</th>
                                    <th scope="col" style={{color:"white", backgroundColor:"black"}}>Phone</th>
                                    <th scope="col" style={{color:"white", backgroundColor:"black"}}>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {api && api.map(user => {
                                    const { id, firstName, lastName, age, gender, phone, email } = user;
                                    return (
                                        <tr key={id}>
                                            <th scope="row">{id}</th>
                                            <td>{firstName}</td>
                                            <td>{lastName}</td>
                                            <td>{age}</td>
                                            <td>{gender}</td>
                                            <td>{phone}</td>
                                            <td>{email}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetch;
