import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BankCards from './Finance/bankCards';
import BankAccountHolders from './Finance/bankAccountHolders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFlag } from '@fortawesome/fontawesome-svg-core';

const Money = () => {
  const [showBankAccounts, setShowBankAccounts] = useState(false);
  const [showBankCards, setShowBankCards] = useState(false);
  const [showTable, setShowTable] = useState(true);

  const handleBankAccountsClick = () => {
    setShowBankAccounts(true);
    setShowBankCards(false);
    setShowTable(true);
  };

  const handleBankCardsClick = () => {
    setShowBankAccounts(false);
    setShowBankCards(true);
    setShowTable(true);
  };

  const handleTableClose = () => {
    setShowTable(false);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
        <FontAwesomeIcon icon="fa-solid fa-flag" />                <h5 className="card-title">Financial Information</h5>
          <p>---- OVERVIEW INFO HERE -----</p>
          <button className="btn btn-link" onClick={handleBankAccountsClick}>
            Examine Bank Accounts
          </button>
          <button className="btn btn-link" onClick={handleBankCardsClick}>
            Examine Bank Cards
          </button>
        </div>
      </div>

      {showTable && (showBankAccounts || showBankCards) && (
        <div>
          {showBankAccounts && <BankAccountHolders />}
          {showBankCards && <BankCards />}
          <br />
          <button className="btn btn-warning" onClick={handleTableClose}>
            Close Table
          </button>
        </div>
      )}
    </div>
  );
};

export default Money;
