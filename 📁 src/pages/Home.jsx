import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>🏦 Welcome to Banking System</h1>

      <p>Secure Online Banking Application</p>

      <br />

      <Link to="/login">
        <button className="btn">Login</button>
      </Link>

      &nbsp;

      <Link to="/register">
        <button className="btn">Register</button>
      </Link>
    </div>
  );
}

export default Home;
