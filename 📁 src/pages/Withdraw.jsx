import { useState } from "react";

function Withdraw() {
  const [amount, setAmount] = useState("");

  const withdrawMoney = (e) => {
    e.preventDefault();

    alert("Withdraw ₹" + amount);
  };

  return (
    <div className="page">
      <h2>Withdraw Money</h2>

      <form onSubmit={withdrawMoney}>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <button className="btn">
          Withdraw
        </button>
      </form>
    </div>
  );
}

export default Withdraw;
