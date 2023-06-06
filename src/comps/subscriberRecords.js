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
      const response = await fetch('http://localhost:3000/subscriber-records');
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
            <th>Forenames</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Network</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map(subscriber => (
            <tr key={subscriber.phoneNumber}>
              <td>{subscriber.forenames}</td>
              <td>{subscriber.surname}</td>
              <td>{subscriber.dateOfBirth}</td>
              <td>{subscriber.address}</td>
              <td>{subscriber.phoneNumber}</td>
              <td>{subscriber.network}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriberRecords;
