import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"

const Realtimedb = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const [company, setCompany] = useState("");

    const handleData = (e) => {
        e.preventDefault();
        const data = getDatabase(app);
        let id = Math.floor(Math.random() * 100000);

        set(ref(data, `users/${id}`), {
            name: name,
            email: email,
            phone: phone,
            msg: msg,
            company: company,
        });

        alert("Your Data is Added to Server.");

  
        setName("");
        setCompany("");
        setPhone("");
        setMsg("");
        setEmail("");
    };

    return (
        <div align="center">
            <h3>Contact Page: Using Realtime Database Firebase</h3>
            <form onSubmit={handleData}>
                <div className="formInput">
                    <label htmlFor="name">Name:-</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="formInput">
                    <label htmlFor="company">Company:-</label>
                    <input type="text" onChange={(e) => setCompany(e.target.value)} value={company} />
                </div>
                <div className="formInput">
                    <label htmlFor="email">Email:-</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="formInput">
                    <label htmlFor="phone">Phone:-</label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div className="formInput">
                    <label htmlFor="msg">Message:-</label>
                    <input type="text" onChange={(e) => setMsg(e.target.value)} value={msg} />
                </div>
            <div className="d-flex align-items-center justify-content-center w-100">
            <input align="center" type="submit" value="Submit" />
            </div>
            </form>
        </div>
    );
};

export default Realtimedb;
