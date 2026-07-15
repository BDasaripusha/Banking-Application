import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <h1>🏦 Dashboard</h1>

      <hr />

      <br />

      <h3>Welcome, Customer</h3>

      <h2>Current Balance</h2>

      <h1 style={{ color: "green" }}>₹50,000</h1>

      <br />

      <div>
        <Link to="/deposit">
          <button className="btn">Deposit</button>
        </Link>

        &nbsp;

        <Link to="/withdraw">
          <button className="btn">Withdraw</button>
        </Link>

        &nbsp;

        <Link to="/transfer">
          <button className="btn">Transfer</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
