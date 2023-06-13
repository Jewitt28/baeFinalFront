import React, { useState, useEffect } from 'react';

const AnprObservations = () => {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    // Fetch the data from your backend API or server
    fetchAnprObservations()
      .then(data => {
        setObservations(data);
      })
      .catch(error => {
        console.error('Error fetching ANPR observations:', error);
      });
  }, []);

  const fetchAnprObservations = async () => {
    try {
      const response = await fetch('http://18.168.246.188:8080/anpr-observations');
      if (!response.ok) {
        throw new Error('An error occurred while fetching ANPR observations data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>ANPR Observations</h2>
      <table>
        <thead>
          <tr>
            <th>ANPR Point ID</th>
            <th>Event Time</th>
            <th>Vehicle Registration Number</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {observations.map(data => (
            <tr key={data.anprPointId}>
              <td>{data.anprPointId}</td>
              <td>{data.timeStamp}</td>
              <td>{data.vehicleRegistrationNumber}</td>
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

export default AnprObservations;
