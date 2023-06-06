import React, { useState, useEffect } from 'react';
// import BankCards from './comps/bankCards';


const BankAccountHolders = () => {
  const [accountHolders, setAccountHolders] = useState([]);

  useEffect(() => {
    fetchBankAccountHolders()
      .then(data => {
        setAccountHolders(data);
      })
      .catch(error => {
        console.error('Error fetching bank account holders:', error);
      });
  }, []);

  const fetchBankAccountHolders = async () => {
    try {
      const response = await fetch('http://localhost:3000/bank-account-holders');
      if (!response.ok) {
        throw new Error('An error occurred while fetching bank account holders data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>Bank Account Holders</h2>
      <table>
        <thead>
          <tr>
            <th>Bank Account ID</th>
            <th>Account Number</th>
            <th>Bank</th>
            <th>Forenames</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Home Address</th>
          </tr>
        </thead>
        <tbody>
          {accountHolders.map(holder => (
            <tr key={holder.bankAccountId}>
              <td>{holder.bankAccountId}</td>
              <td>{holder.accountNumber}</td>
              <td>{holder.bank}</td>
              <td>{holder.forenames}</td>
              <td>{holder.surname}</td>
              <td>{holder.dateOfBirth}</td>
              <td>{holder.homeAddress}</td>
            </tr>
         
         ))}
         </tbody>
       </table>
     </div>
   );
 };
 
 export default BankAccountHolders;