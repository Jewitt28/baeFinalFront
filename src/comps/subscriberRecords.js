import React, { useState, useEffect } from 'react';

const SubscriberRecords = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetchSubscriberRecords()
      .then(data => {
        setSubscribers(data);
      })
      .catch(error => {
        console.error('Error fetching subscriber records:', error);
      });
  }, []);

  const fetchSubscriberRecords = async () => {
    try {
      const response = await fetch('http://18.168.246.188:8080/subscriber-records');
      if (!response.ok) {
        throw new Error('An error occurred while fetching subscriber records data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>Subscriber Records</h2>
      <table>
        <thead>
          <tr>
            <th>Subscriber Record ID</th>
            <th>Phone Number</th>
            <th>Network</th>
            <th>Citizen ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map(data => (
            <tr key={data.subscriberRecordId}>
              <td>{data.phoneNumber}</td>
              <td>{data.network}</td>
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

export default SubscriberRecords;
