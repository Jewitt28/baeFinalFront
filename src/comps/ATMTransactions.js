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
      const response = await fetch('http://localhost:3000/atm-transactions');
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
            <th>Event Time</th>
            <th>ATM ID</th>
            <th>Bank Card Number</th>
            <th>Transaction Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.event_time}>
              <td>{transaction.event_time}</td>
              <td>{transaction.atmId}</td>
              <td>{transaction.bankCardNumber}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ATMTransactions;
