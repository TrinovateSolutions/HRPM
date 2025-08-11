import "./Subscription.css";
import Layout from "./Layout";

export default function Subscription() {
    return (
        <Layout>
            <div className="subscription_container">
                <div className="subscriptions subscription_a">
                    <h1 className="head_a">
                        Free Tier
                    </h1>
                    <ul>
                        <li>
                            View only Access to Sample Data
                        </li>
                        <li>
                            No Adding, Editing or Deleting Data
                        </li>
                        <li>
                            Limited to Demo Environment
                        </li>
                        <li>
                            Email Support
                        </li>
                    </ul>
                </div>
                <div className="subscriptions subscription_b">
                    <div className="head_b">
                        <h1 className="head_b">
                            Gold
                        </h1>
                        <p>
                            (999/month)
                        </p>
                    </div>
                    <ul>
                        <li>
                            Upto 50 Employees
                        </li>
                        <li>
                            Attendance Tracking
                        </li>
                        <li>
                            Payroll Generation
                        </li>
                        <li>
                            Dashboard upto 5 Charts
                        </li>
                        <li>
                            Email or Phone Support (09:00 - 17:00)
                        </li>
                    </ul>
                </div>
                <div className="subscriptions subscription_c">
                    <div className="head_c">
                        <h1 className="head_c">
                            Platinum
                        </h1>
                        <p>
                            (2499/month)
                        </p>
                    </div>
                    <ul>
                        <li>
                            Upto 250 Employees
                        </li>
                        <li>
                            Role based Access Control
                        </li>
                        <li>
                            Multi-branch Setup
                        </li>
                        <li>
                            Custom Pay-slip Template
                        </li>
                        <li>
                            24/7 Support
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}