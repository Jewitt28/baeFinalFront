import React, { useState, useEffect } from 'react';

const EPOSTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchEPOSTransactions()
      .then(data => {
        setTransactions(data);
      })
      .catch(error => {
        console.error('Error fetching EPOS transactions:', error);
      });
  }, []);

  const fetchEPOSTransactions = async () => {
    try {
      const response = await fetch('http://18.168.246.188:8080/epos-transactions');
      if (!response.ok) {
        throw new Error('An error occurred while fetching EPOS transactions data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>EPOS Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Event Time</th>
            <th>EPOS ID</th>
            <th>Bank Card Number</th>
            <th>Payee Account</th>
            <th>Amount</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {transactions.map(data => (
            <tr key={data.eposId}>
              <td>{data.timeStamp}</td>
              <td>{data.eposId}</td>
              <td>{data.bankCardNumber}</td>
              <td>{data.type}</td>
              <td>{data.amount}</td>
              <td>
                <button type="text">Overview</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EPOSTransactions;
