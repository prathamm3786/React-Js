import React, { useState } from 'react'

const ControlComponents = () => {

    const [name, setName] = useState("")
    const [record, setRecord] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert("All field required!!!")
            return false
        }
        let oldRec = [...record, name]
        setRecord(oldRec)
        alert("Record added")
        setName('')
    }
    return (
        <div align="center">
            <h1>Controle Componets</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Name :-</td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" />
                        </td>
                    </tr>
                </table>
                <br />
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Sr no</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{item}</td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default ControlComponents
