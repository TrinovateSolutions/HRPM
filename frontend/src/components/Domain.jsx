import { useState } from "react";
import "./Domain.css";
import Logo from '../assets/logo.png';

export default function Domain() {
    const [selectedType, setSelectedType] = useState("A");

    const records = {
        "A": {
            title: "Add an A Record",
            steps: [
                "Open your domain's DNS settings.",
                "Add a new DNS record of type A.",
                "Set Host/Name to '@' (root domain).",
                { label: "Value/IP Address", value: "123.45.67.89" },
                "Save and wait for DNS to propagate."
            ]
        },
        "TXT": {
            title: "Add a TXT Record",
            steps: [
                "Go to your DNS management page.",
                "Add a new DNS record of type TXT.",
                "Set Host/Name to '@'.",
                { label: "Value", value: "trinovate-verification=abc123xyz" },
                "Save changes and wait for propagation."
            ]
        },
        "CNAME": {
            title: "Add a CNAME Record",
            steps: [
                "Open your DNS settings.",
                "Add a new DNS record of type CNAME.",
                "Set Host/Name to 'www'.",
                { label: "Value", value: "connect.trinovate.in" },
                "Save and wait for propagation."
            ]
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard: " + text);
    };

    return (
        <div className="domain-page">
            <img className="logo" src={Logo} alt="Trinovate Solutions" />

            <div className="domain-card">
                <h2 className="domain-head">Link Your Domain With Us!</h2>

                <p className="domain-sub">Choose a record for verification method:</p>

                <div className="domain-buttons">
                    {Object.keys(records).map((type) => (
                        <button
                            key={type}
                            className={selectedType === type ? "active" : ""}
                            onClick={() => setSelectedType(type)}
                        >
                            {type} 
                        </button>
                    ))}
                </div>

                <div className="record-instructions">
                    <h3>{records[selectedType].title}</h3>
                    <ol>
                        {records[selectedType].steps.map((step, index) => {
                            if (typeof step === "string") {
                                return <li key={index}>{step}</li>;
                            } else {
                                return (
                                    <li key={index}>
                                        {step.label}:{" "}
                                        <span className="record-value">{step.value}</span>
                                        <button
                                            className="copy-btn"
                                            onClick={() => copyToClipboard(step.value)}
                                        >
                                            Copy to Clipboard
                                        </button>
                                    </li>
                                );
                            }
                        })}
                    </ol>
                </div>
                <div className="finished">
                    <button>Finish</button>
                </div>
            </div>
        </div>
    );
}
