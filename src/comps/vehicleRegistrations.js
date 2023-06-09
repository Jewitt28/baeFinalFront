import React, { useState, useEffect } from 'react';

const VehicleRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchVehicleRegistrations()
      .then(data => {
        setRegistrations(data);
      })
      .catch(error => {
        console.error('Error fetching vehicle registrations:', error);
      });
  }, []);

  const fetchVehicleRegistrations = async () => {
    try {
      const response = await fetch('http://18.168.246.188:8080/vehicleRegistrations/read');
      if (!response.ok) {
        throw new Error('An error occurred while fetching vehicle registrations data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>Vehicle Registrations</h2>
      <table>
        <thead>
          <tr>
            <th>Registration Date</th>
            <th>Vehicle Registration No</th>
            <th>Make</th>
            <th>Model</th>
            <th>Colour</th>
            <th>Actions</th>

            
          </tr>
        </thead>
        <tbody>
          {registrations.map(data => (
            <tr>
              <td>{data.registrationId}</td>
              <td>{data.registrationDate}</td>
              <td>{data.vehicleRegistrationNo}</td>
              <td>{data.make}</td>
              <td>{data.model}</td>
              <td>{data.colour}</td>
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

export default VehicleRegistrations;
