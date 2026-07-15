function Transactions() {

  const transactions = [
    {
      date: "01-Jul-2026",
      type: "Deposit",
      amount: "₹10,000"
    },
    {
      date: "03-Jul-2026",
      type: "Withdraw",
      amount: "₹2,000"
    },
    {
      date: "05-Jul-2026",
      type: "Transfer",
      amount: "₹5,000"
    }
  ];

  return (
    <div className="page">

      <h2>Transaction History</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Transactions;
