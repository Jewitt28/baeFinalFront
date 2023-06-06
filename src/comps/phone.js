import React from 'react';
import { Link } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const  Phone =  ({ phoneNumber, forenames, surnames, callerMSISDN, recieverMSISDN, event_time,  }) => {
    
  
  
  
  
  
  
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Mobile Phone information</h5>
          

          <Link className="link" to="/mobileCallRecords">Examine Phone Records</Link>
          <Link className="link" to="/subscriberRecords"> Registered Phone Accounts</Link>
        </div>
      </div>
      <h2>Communications:</h2>
      <p>Known Phone Numbers: {phoneNumber} {forenames} {surnames}</p>
      <p>Records: {callerMSISDN} {recieverMSISDN} {forenames} {surnames} {event_time}</p>
      <p>Contacts: {phoneNumber} {forenames} {surnames}</p>
    </div>
  );
};

export default Phone;
