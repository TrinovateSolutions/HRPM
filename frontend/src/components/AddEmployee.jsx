import { useState } from "react";
import "./AddEmployee.css";
import Layout from "./Layout";

export default function AddEmployee() {
    const [activeTab, setActiveTab] = useState("personal");
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewURL = URL.createObjectURL(file);
            setImagePreview(previewURL);
        }
    };

    return (
        <Layout>
            <div className="add-employee-page">
                <div className="add-employee-container">
                    <div className="tab-buttons">
                        <button
                            className={activeTab === "personal" ? "active" : ""}
                            onClick={() => setActiveTab("personal")}
                        >
                            Personal Details
                        </button>
                        <button
                            className={activeTab === "employment" ? "active" : ""}
                            onClick={() => setActiveTab("employment")}
                        >
                            Employment Details
                        </button>
                        <button
                            className={activeTab === "bank_info" ? "active" : ""}
                            onClick={() => setActiveTab("bank_info")}
                        >
                            Bank Details
                        </button>
                        <button
                            className={activeTab === "salary_breakup" ? "active" : ""}
                            onClick={() => setActiveTab("salary_breakup")}
                        >
                            Salary Breakup
                        </button>
                    </div>

                    {/* Card */}
                    <div className="card">
                        {activeTab === "personal" && (
                            <div className="form-grid">
                                <div>
                                    <label>Name *</label>
                                    <input type="text" placeholder="Enter name" required />
                                </div>
                                <div>
                                    <label>Phone Number *</label>
                                    <input type="tel" placeholder="Enter phone" required />
                                </div>
                                <div>
                                    <label>Date of Birth</label>
                                    <input type="date" />
                                </div>
                                <div>
                                    <label>Address *</label>
                                    <input type="text" placeholder="Enter address" required />
                                </div>
                                <div>
                                    <label>Aadhar Number *</label>
                                    <input type="text" placeholder="Enter Aadhar" required />
                                </div>
                                <div>
                                    <label>PAN Number *</label>
                                    <input type="text" placeholder="Enter PAN" required />
                                </div>
                                <div>
                                    <label>Blood Group</label>
                                    <input type="text" placeholder="Enter blood group" />
                                </div>
                                <div>
                                    <label>Emergency Contact *</label>
                                    <input type="tel" placeholder="Enter emergency contact" required />
                                </div>
                            </div>
                        )}

                        {activeTab === "employment" && (
                            <div className="form-grid">
                                <div>
                                    <label>Employee ID *</label>
                                    <input type="text" placeholder="Enter ID" />
                                </div>
                                <div>
                                    <label>Designation *</label>
                                    <input type="text" placeholder="Enter designation" />
                                </div>
                                <div>
                                    <label>Date of Joining *</label>
                                    <input type="date" />
                                </div>
                                <div>
                                    <label>Date of Exit</label>
                                    <input type="date" />
                                </div>
                                <div>
                                    <label>Salary *</label>
                                    <input type="number" placeholder="Enter salary" />
                                </div>
                                <div>
                                    <label>Work Location</label>
                                    <input type="text" placeholder="Enter location" />
                                </div>
                                <div>
                                    <label>Manager Name</label>
                                    <input type="text" placeholder="Enter manager" />
                                </div>
                                <div>
                                    <label>Employment Type</label>
                                    <select>
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Contract</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {activeTab === "bank_info" && (
                            <div className="form-grid">
                                <div>
                                    <label>Bank Name</label>
                                    <input type="text" placeholder="Enter Bank Name" required />
                                </div>
                                <div>
                                    <label>Bank Account Number</label>
                                    <input type="text" placeholder="Enter Bank Account Number" required />
                                </div>
                                <div>
                                    <label>IFSC Code</label>
                                    <input type="text" placeholder="Enter IFSC Code" required />
                                </div>
                                <div>
                                    <label>Name on the Account</label>
                                    <input type="text" placeholder="Enter Name on the Account" required />
                                </div>
                                <div>
                                    <label>PF NUMBER</label>
                                    <input type="text" placeholder="Enter PF NUMBER" required />
                                </div>
                                <div>
                                    <label>UAN</label>
                                    <input type="text" placeholder="Enter UAN" />
                                </div>
                                <div>
                                    <label>PF Join Date</label>
                                    <input type="tel" placeholder="Enter PF Join Date" required />
                                </div>
                                <div>
                                    <label>PF End Date</label>
                                    <input type="tel" placeholder="Enter PF End Date" required />
                                </div>
                            </div>
                        )}
                        {activeTab === "salary_breakup" && (
                            <div className="form-grid">
                                <div>
                                    <label>Basic</label>
                                    <input type="text" placeholder="Basic Salary" required />
                                </div>
                                <div>
                                    <label>HRA</label>
                                    <input type="text" placeholder="Enter HRA" required />
                                </div>
                                <div>
                                    <label>Conveyance Allowance</label>
                                    <input type="text" placeholder="Conveyance Allowance" required />
                                </div>
                                <div>
                                    <label>Special Allowance</label>
                                    <input type="text" placeholder="Special Allowance" required />
                                </div>
                                <div>
                                    <label>Travel Reimbursement (LTA)</label>
                                    <input type="text" placeholder="Travel Reimbursement (LTA)" required />
                                </div>
                                <div>
                                    <label>Education Allowance</label>
                                    <input type="text" placeholder="Education Allowance" />
                                </div>
                                <div>
                                    <label>Telephone Reimbursement</label>
                                    <input type="tel" placeholder="Telephone Reimbursement" required />
                                </div>
                                <div>
                                    <label>PF - Employer</label>
                                    <input type="tel" placeholder="PF - Employer" required />
                                </div>
                                <div>
                                    <label>PF Employee</label>
                                    <input type="tel" placeholder="PF Employee" required />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="image-upload-save" style={{color: 'black'}}>
                    <div className="full-width">
                        <label>Passport Size Image *</label>
                        <input
                            type="file"
                            accept="image/*"
                            required
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* Image Display */}
                    <div className="image-preview">
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Passport Size"
                                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "5px" }}
                            />
                        ) : (
                            <div
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#f0f0f0",
                                    color: "#999",
                                    borderRadius: "5px",
                                    border: "1px dashed #ccc",
                                }}
                            >
                                No image found
                            </div>
                        )}
                    </div>
                    <div className="save-exit">
                        <button className="save-btn">Save</button>
                        <button className="exit-btn">Exit</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
