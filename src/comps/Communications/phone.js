import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Phone = ({ phoneNumber, subscriberRecordId, network, callerMSISDN, recieverMSISDN, timeStamp, citizenId, callCellTowerId, receiverCellTowerId  }) => {
  const [showPhoneRecords, setShowPhoneRecords] = useState(false);
  const [showPhoneAccounts, setShowPhoneAccounts] = useState(false);
  const [showTable, setShowTable] = useState(true);

  const handlePhoneRecordsClick = () => {
    setShowPhoneRecords(true);
    setShowPhoneAccounts(false);
    setShowTable(true);
  };

  const handlePhoneAccountsClick = () => {
    setShowPhoneRecords(false);
    setShowPhoneAccounts(true);
    setShowTable(true);
  };

  const handleTableClose = () => {
    setShowTable(false);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          {/* <FontAwesomeIcon icon={faPhone} /> */}
          <h5 className="card-title">Mobile Phone information</h5>
          <button className="btn btn-link" onClick={handlePhoneRecordsClick}>
            Examine Phone Records
          </button>
          <button className="btn btn-link" onClick={handlePhoneAccountsClick}>
            Registered Phone Accounts
          </button>
        </div>
      </div>

      {showTable && (showPhoneRecords || showPhoneAccounts) && (
        <div>
          {showPhoneRecords && (
  <div>
    
    <table className="table">
      <thead>
        <tr>
          <th>Subscriber Record ID</th>
          <th>Caller MSISDN</th>
          <th>Receiver MSISDN</th>
          <th>CallCell Tower ID</th>
          <th>Receiver Cell Tower ID</th>
          <th>Event Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{subscriberRecordId}</td>
          <td>{callerMSISDN}</td>
          <td>{recieverMSISDN}</td>
          <td>{callCellTowerId}</td>
          <td>{receiverCellTowerId}</td>
          <td>{timeStamp}</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
{showPhoneAccounts && (
  <div>
    <h2>Phone Accounts:</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Subscriber ID</th>
          <th>Known Phone Numbers</th>
          <th>Phone network</th>
          <th>Citizen ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{subscriberRecordId}</td>
          <td>{phoneNumber}</td>
          <td>{network}</td>
          <td>{citizenId}</td>
        </tr>
      </tbody>
    </table>
  </div>
)}

          <br />
          <button className="btn btn-warning" onClick={handleTableClose}>
            Close Table
          </button>
        </div>
      )}
    </div>
  );
};

export default Phone;
