import React, { useState, useEffect } from 'react';

const EPOSTerminals = () => {
  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    fetchEPOSTerminals()
      .then(data => {
        setTerminals(data);
      })
      .catch(error => {
        console.error('Error fetching EPOS terminals:', error);
      });
  }, []);

  const fetchEPOSTerminals = async () => {
    try {
      const response = await fetch('http://18.168.246.188:8080/epos-terminals');
      if (!response.ok) {
        throw new Error('An error occurred while fetching EPOS terminals data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>EPOS Terminals</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vendor</th>
            <th>Street Name</th>
            <th>Postcode</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {terminals.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.vendor}</td>
              <td>{data.streetName}</td>
              <td>{data.postcode}</td>
              <td>{data.latitude}</td>
              <td>{data.longitude}</td>
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

export default EPOSTerminals;
