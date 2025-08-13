import { Bar, Line, Doughnut, Pie, HorizontalBar } from "react-chartjs-2";
import Layout from "./Layout";
import "./Dashboard.css";

export default function Dashboard() {
    // Chart data samples
    const payrollLastMonthData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Payroll (₹)",
                data: [45000, 60000, 55000, 70000],
                backgroundColor: "#2E86DE"
            }
        ]
    };

    const totalPayrollGeneratedData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Total Payroll (₹)",
                data: [250000, 300000, 280000, 320000, 350000, 370000],
                fill: false,
                borderColor: "#28B463",
                tension: 0.1
            }
        ]
    };

    const totalEmployeesData = {
        labels: ["Employees"],
        datasets: [
            {
                label: "Total Employees",
                data: [150],
                backgroundColor: ["#F1C40F"]
            }
        ]
    };

    const currentEmployeesData = {
        labels: ["Current", "Exited"],
        datasets: [
            {
                label: "Current Employees",
                data: [140, 10],
                backgroundColor: ["#27AE60", "#E74C3C"]
            }
        ]
    };

    const payScaleData = {
        labels: ["< ₹20k", "₹20k–₹50k", "₹50k–₹1L", "> ₹1L"],
        datasets: [
            {
                label: "No. of Employees",
                data: [40, 60, 30, 20],
                backgroundColor: ["#2980B9", "#8E44AD", "#E67E22", "#16A085"]
            }
        ]
    };

    return (
        <Layout>
            <div className="dashboard">
                <h1>HR & Payroll Dashboard</h1>

                <div className="chart-grid">
                    <div className="chart-card">
                        <h3>Payroll Generated Last Month</h3>
                        <Bar data={payrollLastMonthData} />
                    </div>

                    <div className="chart-card">
                        <h3>Total Payroll Generated</h3>
                        <Line data={totalPayrollGeneratedData} />
                    </div>

                    <div className="chart-card">
                        <h3>Total Employees</h3>
                        <Doughnut data={totalEmployeesData} />
                    </div>

                    <div className="chart-card">
                        <h3>Current Employees</h3>
                        <Pie data={currentEmployeesData} />
                    </div>

                    <div className="chart-card">
                        <h3>Total Pay by Employee Scale</h3>
                        <HorizontalBar data={payScaleData} options={{ indexAxis: 'y' }} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
