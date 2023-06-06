import React, { useState, useEffect } from 'react';

const ATMPoint = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetchATMPoints()
      .then(data => {
        setPoints(data);
      })
      .catch(error => {
        console.error('Error fetching ATM points:', error);
      });
  }, []);

  const fetchATMPoints = async () => {
    try {
      const response = await fetch('http://localhost:3000/atm-points');
      if (!response.ok) {
        throw new Error('An error occurred while fetching ATM points data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>ATM Points</h2>
      <table>
        <thead>
          <tr>
            <th>ATM ID</th>
            <th>Operator</th>
            <th>Street Name</th>
            <th>Postcode</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {points.map(point => (
            <tr key={point.atmId}>
              <td>{point.atmId}</td>
              <td>{point.operator}</td>
              <td>{point.streetName}</td>
              <td>{point.postcode}</td>
              <td>{point.latitude}</td>
              <td>{point.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ATMPoint;
