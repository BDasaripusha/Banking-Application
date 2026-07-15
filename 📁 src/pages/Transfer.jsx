import { useState } from "react";

function Transfer() {

  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  const transferMoney = (e) => {
    e.preventDefault();

    alert("Transfer Successful");
  };

  return (
    <div className="page">

      <h2>Transfer Money</h2>

      <form onSubmit={transferMoney}>

        <input
          type="text"
          placeholder="Receiver Account Number"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <button className="btn">
          Transfer
        </button>

      </form>

    </div>
  );
}

export default Transfer;
