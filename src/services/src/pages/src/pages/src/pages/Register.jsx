import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const registerUser = (e) => {
    e.preventDefault();

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="page">
      <h2>Create Account</h2>

      <form onSubmit={registerUser}>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <br />
        <br />

        <button className="btn">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;
