import React from 'react';
import { Link } from 'react-router-dom';
import BankCards from './bankCards';
import BankAccountHolders from './bankAccountHolders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Money = ({ bankAccounts, transactions }) => {
  return (
    <div>

      <div className="card">
        <div className="card-body">
        <FontAwesomeIcon icon="fa-solid fa-circle-sterling" />
          <h5 className="card-title">Fincancial Information</h5>
          {/* <p className="card-text">Place of Birth: {citizen.placeOfBirth}</p> --------- HIGHLIGHTED DATA OF IMPORTANCE? */}
          <Link className="link" to="/BankAccountHolders">Examine Bank Accounts</Link>
          {/*<p className="card-text">Home Address: {citizen.homeAddress}</p> ------- ANY RECENT SUSPICIOUS ACTIVITY */}
          <Link className="link" to="/BankCards">Examine Bank Cards</Link>

          <div>
            <h2>Financial:</h2>
            <p>Registered Bank Accounts: {bankAccounts}</p>
            <p>Transaction History: {transactions}</p>

            <h3>Related Links:</h3>
            <ul>
              <li>
                <Link to="/bankCards">Bank Cards</Link>
              </li>
              <li>
                <Link to="/bankAccountHolders">Bank Account Holders</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Money;
