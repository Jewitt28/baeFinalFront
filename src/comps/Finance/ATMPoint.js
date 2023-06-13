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
      const response = await fetch('http://18.168.246.188:8080/atm-points');
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
          {points.map(data => (
            <tr key={data.atmId}>
              <td>{data.atmId}</td>
              <td>{data.operator}</td>
              <td>{data.streetName}</td>
              <td>{data.postcode}</td>
              <td>{data.latitude}</td>
              <td>{data.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ATMPoint;
