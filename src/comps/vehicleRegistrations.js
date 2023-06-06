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
      const response = await fetch('http://localhost:3000/vehicle-registrations');
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
            <th>Registration ID</th>
            <th>Registration Date</th>
            <th>Vehicle Registration No</th>
            <th>Make</th>
            <th>Model</th>
            <th>Forenames</th>
            <th>Surname</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Driver License ID</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(registration => (
            <tr key={registration.registrationId}>
              <td>{registration.registrationId}</td>
              <td>{registration.registrationDate}</td>
              <td>{registration.vehicleRegistrationNo}</td>
              <td>{registration.make}</td>
              <td>{registration.model}</td>
              <td>{registration.forenames}</td>
              <td>{registration.surname}</td>
              <td>{registration.address}</td>
              <td>{registration.dateOfBirth}</td>
              <td>{registration.driverLicenseID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleRegistrations;
