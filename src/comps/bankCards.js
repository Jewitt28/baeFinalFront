import React, { useState, useEffect } from 'react';

const BankCards = () => {
  const [bankCards, setBankCards] = useState([]);

  useEffect(() => {
    fetchBankCards()
      .then(data => {
        setBankCards(data);
      })
      .catch(error => {
        console.error('Error fetching bank cards:', error);
      });
  }, []);

  const fetchBankCards = async () => {
    try {
      const response = await fetch('http://localhost:8080/bank-cards');
      if (!response.ok) {
        throw new Error('An error occurred while fetching bank cards data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>Bank Cards</h2>
      <table>
        <thead>
          <tr>
            <th>Bank Card ID</th>
            <th>Card Number</th>
            <th>Bank Account ID</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {bankCards.map(data => (
            <tr key={data.bankcardId}>
              <td>{data.bankcardId}</td>
              <td>{data.bankAccountId}</td>
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

export default BankCards;
