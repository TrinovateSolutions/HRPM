import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./Employee.css";

export default function Employee() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

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
      <div className="employee-page">
        <div className="employee-header">
          <div className="employee-search">
            <input
              type="text"
              placeholder="Search for an employee"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
          </div>
          <div className="employee-add">
            <button>
              <span className="plus">+</span> ADD EMPLOYEE
            </button>
          </div>
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Email</th>
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
      </div>
    </Layout>
  );
}
