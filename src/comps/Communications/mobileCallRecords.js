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
      const response = await fetch(`http://18.168.246.188:8080/mobilecallrecords/read`);
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
            <th>Subscriber Record ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {callRecords.map(data => (
            <tr key={data.id}>
              <td>{data.timeStamp}</td>
              <td>{data.callerMSISDN}</td>
              <td>{data.callCellTowerId}</td>
              <td>{data.receiverMSISDN}</td>
              <td>{data.receiverTowerId}</td>
              <td>{data.subscriberRecordId}</td>
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

export default MobileCallRecords;
