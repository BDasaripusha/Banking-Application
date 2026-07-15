import { useState } from "react";

function Deposit() {
  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();

    alert("Deposited ₹" + amount);
  };

  return (
    <div className="page">
      <h2>Deposit Money</h2>

      <form onSubmit={handleDeposit}>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <button className="btn">
          Deposit
        </button>
      </form>
    </div>
  );
}

export default Deposit;
