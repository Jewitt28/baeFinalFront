import React, { useState, useEffect } from 'react';
// import BankCards from './comps/bankCards';


const BankAccountHolders = (props) => {
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
      const response = await fetch(`http://18.168.246.188:8080/citizen/${props.bankAccountId}`);
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
            <th>Sort Code</th>
            <th>Citizen ID</th>
            <th>Actions</th>

            
          </tr>
        </thead>
        <tbody>
          {accountHolders.map(data => (
            <tr key={data.bankAccountId}>
              <td>{data.bankAccountId}</td>
              <td>{data.accountNumber}</td>
              <td>{data.bank}</td>
              <td>{data.sortCode}</td>
              <td>{data.citizenId}</td>
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
 
 export default BankAccountHolders;