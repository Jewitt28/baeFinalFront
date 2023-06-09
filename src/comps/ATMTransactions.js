import React, { useState, useEffect } from 'react';

const ATMTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchATMTransactions()
      .then(data => {
        setTransactions(data);
      })
      .catch(error => {
        console.error('Error fetching ATM transactions:', error);
      });
  }, []);

  const fetchATMTransactions = async () => {
    try {
      const response = await fetch('http://18.168.246.188:8080/atm-transactions');
      if (!response.ok) {
        throw new Error('An error occurred while fetching ATM transactions data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>ATM Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>ATM ID</th>
            <th>Event Time</th>
            <th>Bank Card Number</th>
            <th>Transaction Type</th>
            <th>Amount</th>
            <th>Bank Card ID</th>
            <th>ATM Transaction ID</th>

          </tr>
        </thead>
        <tbody>
          {transactions.map(data => (
            <tr key={data.atmId}>
              <td>{data.timeStamp}</td>
              <td>{data.atmId}</td>
              <td>{data.bankCardNumber}</td>
              <td>{data.type}</td>
              <td>{data.amount}</td>
              <td>{data.atmTrsactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ATMTransactions;
