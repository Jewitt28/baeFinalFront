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
      const response = await fetch('http://localhost:3000/bank-cards');
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
            <th>Sort Code</th>
            <th>Bank Account ID</th>
            <th>Account Number</th>
            <th>Bank</th>
          </tr>
        </thead>
        <tbody>
          {bankCards.map(card => (
            <tr key={card.bankcardId}>
              <td>{card.bankcardId}</td>
              <td>{card.cardNumber}</td>
              <td>{card.sortCode}</td>
              <td>{card.bankAccountId}</td>
              <td>{card.accountNumber}</td>
              <td>{card.bank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankCards;
