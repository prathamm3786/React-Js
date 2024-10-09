import { useState } from "react";
import './form.css';

const Form = () => {
    const [tableInput, setInput] = useState([
        { id: Math.floor(Math.random() * 1000), name: "", email: "", salary: "", isEditing: true }
    ]);

    const add = () => {
        const lastRow = tableInput[tableInput.length - 1];
        const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!lastRow.name || !lastRow.email || !lastRow.salary) {
            alert("Please fill in all fields before adding a new row.");
            return;
        }

        if (!gmailPattern.test(lastRow.email)) {
            alert("Please enter a valid Gmail address.");
            return;
        }

        if (isNaN(lastRow.salary) || lastRow.salary <= 0) {
            alert("Please enter a valid numeric value for the salary.");
            return;
        }

        const updatedLastRow = { ...lastRow, isEditing: false };
        const newField = { id: Math.floor(Math.random() * 1000), name: "", email: "", salary: "", isEditing: true };

        setInput([...tableInput.slice(0, -1), updatedLastRow, newField]);
    };

    const remove = (id) => {
        if (tableInput.length > 1) {
            const updatedData = tableInput.filter((item) => item.id !== id);
            setInput(updatedData);
        } else {
            alert("The first row cannot be deleted.");
        }
    };

    const handleInputChange = (id, field, value) => {
        const updatedTableInput = tableInput.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setInput(updatedTableInput);
    };

    const toggleEdit = (id) => {
        const updatedTableInput = tableInput.map((item) =>
            item.id === id ? { ...item, isEditing: !item.isEditing } : item
        );
        setInput(updatedTableInput);
    };

    return (
        <div className="main" align="center">
            <h1>Add and Delete Rows Dynamically</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Salary</th>
                        <th><button onClick={add}>+</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableInput.map((val, index) => (
                            <tr key={val.id} align="center">
                                <td>
                                    <input 
                                        type="text" 
                                        value={val.name} 
                                        onChange={(e) => handleInputChange(val.id, 'name', e.target.value)} 
                                        disabled={!val.isEditing} 
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        value={val.email} 
                                        onChange={(e) => handleInputChange(val.id, 'email', e.target.value)} 
                                        disabled={!val.isEditing} 
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        value={val.salary} 
                                        onChange={(e) => handleInputChange(val.id, 'salary', e.target.value)} 
                                        disabled={!val.isEditing} 
                                    />
                                </td>
                                <td>
                                    {!val.isEditing ? (
                                        <button onClick={() => toggleEdit(val.id)}>Edit</button>
                                    ) : (
                                        <button onClick={() => toggleEdit(val.id)}>Save</button>
                                    )}
                                </td>
                                <td>
                                    {index !== 0 && (
                                        <button onClick={() => remove(val.id)}>X</button>
                                    )}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Form;
