import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);

  useEffect(() => {
    fetchVehicles()
      .then((data) => {
        setVehicles(data);
      })
      .catch((error) => {
        console.error('Error fetching vehicles:', error);
      });
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await fetch('http://localhost:3000/vehicles');
      if (!response.ok) {
        throw new Error('An error occurred while fetching vehicles data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleVehicleClick = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
  };

  return (


<div>
      <h2>Vehicle Information</h2>
      <div className="card">
        <div className="card-body">
        <FontAwesomeIcon icon="fa-duotone fa-car" />

          <h5 className="card-title">Registered Vehicles:{vehicles.vehicleRegistrationNo}</h5>
          <p className="card-text">Make: {vehicles.make}</p>
          <p className="card-text">Model: {vehicles.model}</p>
          <p className="card-text">Colour: {vehicles.colour}</p>
          <Link className="link" to="/vehicleRegistrations">More Info</Link>
          
        </div>
        
      </div>
    <div>
      <h3>Registered Vehicles</h3>
      <table>
        <thead>
          <tr>
            <th>Vehicle Registration No</th>
            <th>Make</th>
            <th>Model</th>
            <th>Colour</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.vehicleRegistrationNo} onClick={() => handleVehicleClick(vehicle.id)}>
              <td>{vehicle.vehicleRegistrationNo}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.colour}</td>
            </tr>
          ))}
        </tbody>
      </table>

     {/* {selectedVehicleId && <VehicleDetails vehicleId={selectedVehicleId} />} */}
    </div>
    </div>
  );
};

export default Vehicles;