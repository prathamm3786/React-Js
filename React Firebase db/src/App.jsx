import { useState } from "react"
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

function App() {
  const[name , setName] = useState("")
  const[phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const db= getDatabase(app);
    let id = Math.floor(Math.random()*100000)
    set(ref(db,`users/${id}`),{
      name:name,
      phone:phone
    })
    alert("record add")
    setName("")
    setPhone("")
  }

  return (
<div align="center">
  <h1>Contact Information</h1>
  <form onSubmit={handleSubmit}>
    <label htmlFor="name"></label><br />
    <input type="text" onChange={(e)=> setName(e.target.value)} value={name}/><br /><br />
    <label htmlFor="phone">Phone Number:</label><br />
    <input type="text" onChange={(e)=> setPhone(e.target.value)} value={phone}/><br /><br />
    <input type="submit" defaultValue="Submit" />
  </form>
</div>

  )
}

export default App
