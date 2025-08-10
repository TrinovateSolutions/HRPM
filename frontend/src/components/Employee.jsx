import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./Employee.css";

export default function Employee() {
  const navigate = useNavigate();

  // Sample employee data
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Developer", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Designer", email: "jane@example.com" },
    { id: 3, name: "Sam Wilson", role: "Manager", email: "sam@example.com" },
  ]);

  const [search, setSearch] = useState("");

  // Filter employees by search
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="employee-page">
        <div className="employee-header">
          <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => navigate("/add-employee")}>+ Add Employee</button>
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
