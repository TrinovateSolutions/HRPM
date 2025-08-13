import { FaLeaf } from "react-icons/fa6";
import Layout from "../components/Layout";
import './Payroll.css';
import { useEffect, useState } from "react";

function getLastWorkingDayOfCurrentMonth() {
    const today = new Date();
    // Get the last day of the month
    let date = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // If it's Saturday (6), go back one day
    // If it's Sunday (0), go back two days
    if (date.getDay() === 6) {
        date.setDate(date.getDate() - 2);
    } else if (date.getDay() === 0) {
        date.setDate(date.getDate() - 3);
    }

    return date;
}

export default function Payroll() {
    const [employees, setEmployees] = useState([]);

    // Fetch employees from backend API
    useEffect(() => {
        fetch("http://localhost:5000/api/employees") // replace with your backend endpoint
            .then((res) => res.json())
            .then((data) => setEmployees(data))
            .catch((err) => console.error("Error fetching employees:", err));
    }, []);

    // Filtered data based on search input
    const filteredEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <Layout>
            <div className="payroll-heading">
                Payroll Management
            </div>
            <div className="payroll-card">
                <div className="payroll-lastday">
                    <span className="payroll-curr-month">
                        {new Date().toLocaleString('en-us', { month: 'short', year: 'numeric' })}
                    </span>
                    &nbsp;Payroll should be generated on/by <strong>{getLastWorkingDayOfCurrentMonth().toDateString()}</strong>
                </div>
                <div className="employee-payroll-div">
                    <div style={{ textAlign: "left", marginTop: "20px" }}>
                        Total Employees: {300}
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <button style={{ color: "#F5EBD6" }}>Generate Payroll</button>
                    </div>
                    <div style={{ textAlign: "left" }}>
                        Current Employees: {300}
                    </div>
                </div>
            </div>
            <div
                style={
                    {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }
                }
            >
                <button style={{ color: "#F5EBD6" }}>View Previous Payroll</button>
                <button style={{ color: "#F5EBD6" }}>Generate Reports</button>
            </div>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Additions</th>
                        <th>Deductions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.length > 0 ? (
                        filteredEmployees.map((emp, index) => (
                            <tr key={emp.id}>
                                <td>{index + 1}</td>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.phone}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No employees found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Layout>
    )
}