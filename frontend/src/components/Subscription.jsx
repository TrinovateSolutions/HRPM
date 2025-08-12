import { useState } from "react";
import "./Subscription.css";
import Layout from "./Layout";

export default function Subscription() {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState("gold");

    const openModal = (e) => {
        e.preventDefault(); // Stop page reload
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Layout>
            <div className="subscription_container">
                <div className="subscriptions subscription_a">
                    <div className="head_a">
                        <h1>Free Tier</h1>
                        <p>(0/month)</p>
                    </div>
                    <ul>
                        <li>View only Access to Sample Data</li>
                        <li>No Adding, Editing or Deleting Data</li>
                        <li>Limited to Demo Environment</li>
                        <li>Email Support only</li>
                        <li>No payroll processing</li>
                    </ul>
                </div>

                <div className="subscriptions subscription_b">
                    <div className="head_b">
                        <h1>Gold</h1>
                        <p>(999/month)</p>
                    </div>
                    <ul>
                        <li>Upto 50 Employees</li>
                        <li>Attendance Tracking</li>
                        <li>Payroll Generation</li>
                        <li>Dashboard upto 5 Charts</li>
                        <li>Email or Phone Support (09:00 - 17:00)</li>
                    </ul>
                </div>

                <div className="subscriptions subscription_c">
                    <div className="head_c">
                        <h1>Platinum</h1>
                        <p>(2499/month)</p>
                    </div>
                    <ul>
                        <li>Upto 250 Employees</li>
                        <li>Role based Access Control</li>
                        <li>Multi-branch Setup</li>
                        <li>Custom Pay-slip Template</li>
                        <li>24/7 Support</li>
                    </ul>
                </div>

                <div className="payment">
                    <a className="payment_link" href="#" onClick={openModal}>
                        &nbsp;Click here for payment
                    </a>
                </div>
            </div>

            {/* Payment Modal */}
            {showModal && (
                <div className="modal_overlay">
                    <div className="modal_content">
                        <h2>Choose a billing period and finish the purchase process</h2>

                        <div>
                            <div className="tier-tab">
                                <button
                                    className={activeTab === "gold" ? "active" : ""}
                                    onClick={() => setActiveTab("gold")}
                                >
                                    Gold
                                </button>
                                <button
                                    className={activeTab === "platinum" ? "active" : ""}
                                    onClick={() => setActiveTab("platinum")}
                                >
                                    Platinum
                                </button>
                            </div>
                            <div className="tier-card">
                                {activeTab === "gold" && (
                                    <div>
                                        <div className="plan_option">
                                            <label>
                                                <input type="radio" name="plan" />
                                                <span>12 months <strong>SAVE 49%</strong></span>
                                                <span className="new_price">₹ 999.00/mo</span>
                                            </label>
                                        </div>            
                                        <div className="plan_option">
                                            <label>
                                                <input type="radio" name="plan" />
                                                <span>6 months<strong>SAVE 25%</strong></span>
                                                <span className="new_price">₹ 1,199.00/mo</span>
                                            </label>
                                        </div>
                                        <div className="plan_option">
                                            <label>
                                                <input type="radio" name="plan" />
                                                <span>1 month</span>
                                                <span className="new_price">₹ 1,499.00/mo</span>
                                            </label>
                                        </div>
                                    </div>


                                )}
                                {activeTab === "platinum" && (
                                    <div>
                                        <div className="plan_option">
                                            <label>
                                                <input type="radio" name="plan" />
                                                <span>12 months<strong>SAVE 40%</strong></span>
                                                <span className="new_price">₹ 2,499.00/mo</span>
                                            </label>
                                        </div>            
                                        <div className="plan_option">
                                            <label>
                                                <input type="radio" name="plan" />
                                                <span>6 months<strong>SAVE 10%</strong></span>
                                                <span className="new_price">₹ 2,699.00/mo</span>
                                            </label>
                                        </div>
                                        <div className="plan_option">
                                            <label>
                                                <input type="radio" name="plan" />
                                                <span>1 month</span>
                                                <span className="new_price">₹ 2,999.00/mo</span>
                                            </label>
                                        </div>
                                    </div>


                                )}
                            </div>
                        </div>
                        <div className="summary_box">
                            <div className="summary_row">
                                <span>Taxes & Fees</span>
                                <span>₹ 1,978.56</span>
                            </div>
                            <div className="summary_row total">
                                <span>Total</span>
                                <span>₹ 12,970.56</span>
                            </div>
                            <div className="summary_row coupon">
                                <span>Coupon code</span>
                                <a href="#">Add</a>
                            </div>
                        </div>

                        <p className="terms_text">
                            By checking out, you agree with our <a href="#">Terms of Service</a> and confirm that
                            you have read our <a href="#">Privacy Policy</a>. You can cancel recurring payments
                            at any time.
                        </p>

                        <div className="modal_buttons">
                            <button className="pay_btn">Choose payment method</button>
                            <button className="close_btn" onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

        </Layout>
    );
}
