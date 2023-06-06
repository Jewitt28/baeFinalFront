import React, { useState, useEffect } from 'react';

const MobileCallRecords = () => {
  const [callRecords, setCallRecords] = useState([]);

  useEffect(() => {
    // Fetch the data from your backend API or server
    fetchMobileCallRecords()
      .then(data => {
        setCallRecords(data);
      })
      .catch(error => {
        console.error('Error fetching mobile call records:', error);
      });
  }, []);

  const fetchMobileCallRecords = async () => {
    try {
      const response = await fetch('http://localhost:3000/mobile-call-records');
      if (!response.ok) {
        throw new Error('An error occurred while fetching mobile call records data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>Mobile Call Records</h2>
      <table>
        <thead>
          <tr>
            <th>Event Time</th>
            <th>Caller MSISDN</th>
            <th>Call Cell Tower ID</th>
            <th>Receiver MSISDN</th>
            <th>Receiver Tower ID</th>
          </tr>
        </thead>
        <tbody>
          {callRecords.map(callRecord => (
            <tr key={callRecord.id}>
              <td>{callRecord.event_time}</td>
              <td>{callRecord.callerMSISDN}</td>
              <td>{callRecord.callCellTowerId}</td>
              <td>{callRecord.receiverMSISDN}</td>
              <td>{callRecord.receiverTowerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MobileCallRecords;
