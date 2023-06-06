import React from 'react';

const Location = ({ vehicleRegistrationNumber, longtitude, latitude, streetName, event_time, bankCardNumber, postcode, phoneNumber, callerMSISDN, callCellTowerId}) => {
    
  
    return (
    <div>
       
      <h2>Location:</h2>
      <p>ANPR Vehicle Records: {vehicleRegistrationNumber}{longtitude}{latitude}{streetName}{event_time} </p>
      <p>ATM: {bankCardNumber}{streetName}{postcode}{longtitude}{latitude}{event_time}   </p> {/*ANPR sightings descending by date time/*/}
      <p>EPOS: {bankCardNumber}{streetName}{postcode}{longtitude}{latitude}</p>  {/*EPOS sightings descending by date time/*/}
      <p>Phone Cell Tower: {phoneNumber} {callerMSISDN} {callCellTowerId} {longtitude} {latitude}   </p> {/*cell tower outboud records descending by date time/*/}
      <p></p>
    {/**/}
    </div>
        
  );
};

export default Location;