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
      const response = await fetch('http://localhost:3000/epos-terminals');
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
          </tr>
        </thead>
        <tbody>
          {terminals.map(terminal => (
            <tr key={terminal.id}>
              <td>{terminal.id}</td>
              <td>{terminal.vendor}</td>
              <td>{terminal.streetName}</td>
              <td>{terminal.postcode}</td>
              <td>{terminal.latitude}</td>
              <td>{terminal.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EPOSTerminals;
