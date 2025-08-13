import { useState } from "react";
import Logo from '../assets/logo.png';
import "./Otp.css";

export default function Otp() {
    const [emailOtp, setEmailOtp] = useState("");
    const [mobileOtp, setMobileOtp] = useState("");

    const verifyOtps = () => {
        console.log("Email OTP:", emailOtp);
        console.log("Mobile OTP:", mobileOtp);
        // Call your backend API here
    };
    return (
        <div className="otp-page">
            <img className="logo" src={Logo} alt="Trinovate Solutions" />
            <div className="otp-card">
                <h2 className="otp-head">Enter OTPs for registered Email and Mobile Number</h2>
                {/* Mobile OTP */}
                <div className="otp-input">
                    <label>Email OTP:</label>
                    <input
                        type="text"
                        value={mobileOtp}
                        onChange={(e) => setMobileOtp(e.target.value)}
                        placeholder="Enter mobile OTP"
                        maxLength="6"/>
                </div>
                {/* Email OTP */}
                <div className="otp-input">
                    <label>Mobile OTP:</label>
                    <input
                        type="text"
                        value={emailOtp}
                        onChange={(e) => setEmailOtp(e.target.value)}
                        placeholder="Enter email OTP"
                        maxLength="6"/>
                </div>
                <button className="otp-button"
                onClick={verifyOtps}>
                Verify OTPs
            </button>
            </div>
        </div>
    );
}