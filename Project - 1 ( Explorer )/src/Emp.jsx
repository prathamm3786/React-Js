import React from "react";
import "./Style.css";

const EmpCard = (props) => {
    const {emp} = props;

    return (
        <div className="cards">
            <div className="card-header">
                <h3 style={{fontWeight:600}}>Employee Data</h3>
            </div>
            <div className="card-body">
                <p className="underline">Name :-  {emp.empname}</p>
                <p className="underline">Emp ID :-  {emp.empid}</p>
                <p className="underline">Email :-  {emp.empemail}</p>
                <p className="underline">Phone :-  {emp.empphone}</p>
                <p className="underline">Address :-  {emp.empaddress.area}, {emp.empaddress.city}, {emp.empaddress.state}, {emp.empaddress.country}</p>
                <p className="underline">Designation :-  {emp.empdeg}</p>
                <p className="underline">Salary :-  {emp.empsalary}</p>
                <p className="underline">Department :-  {emp.empdepartment}</p>
            </div>

        </div>
    );
};

const EmpList = (props) => {
    const { emps } = props;

    return (
        <div className="employee-list">
            {emps.map((emp, index) => (
                <EmpCard key={index} emp={emp} />
            ))}
        </div>
    );
};

function App() {
    const emps = [
        {
            empid: 1,
            empname: "abc",
            empemail: "abc@gmail.com",
            empphone: 12345,
            empaddress: {
                country: "India",
                state: "Gujarat",
                city: "Surat",
                area: "Motavarachha",
            },
            empdeg: "Junior",
            empsalary: 23000,
            empdepartment: "UI/UX",
        },
        {
            empid: 2,
            empname: "def",
            empemail: "def@gmail.com",
            empphone: 2121,
            empaddress: {
                country: "India",
                state: "Rajasthan",
                city: "Jaipur",
                area: "Jaipurabc",
            },
            empdeg: "Junior",
            empsalary: 21000,
            empdepartment: "Web Design",
        },
        {
            empid: 3,
            empname: "ghi",
            empemail: "ghi@gmail.com",
            empphone: 2212,
            empaddress: {
                country: "India",
                state: "Maharashtra",
                city: "Pune",
                area: "abcpune",
            },
            empdeg: "Senior",
            empsalary: 65000,
            empdepartment: "Backend Developer",
        },
        {
            empid: 4,
            empname: "jkl",
            empemail: "jkl@gmail.com",
            empphone: 212112,
            empaddress: {
                country: "India",
                state: "Karnataka",
                city: "Bengaluru",
                area: "KGF",
            },
            empdeg: "TL",
            empsalary: 150000,
            empdepartment: "Frontend Developer",
        },
    ];

    return (
        <div className="App">
            <h1>Employee Details</h1>
            <EmpList emps={emps} />
        </div>
    );
}

export default App;