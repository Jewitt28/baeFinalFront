import React, { useState } from 'react';
import Vehicles from './vehicles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VehicleRegistrations from './vehicleRegistrations';



const VehicleOverview = () => {
  const [showVehicles, setShowVehicles] = useState(false);
  const [showVehicleRegistrations, setShowVehicleRegistrations] = useState(false);
  const [showTable, setShowTable] = useState(true);

    // const [vehicles, setVehicles] = useState (null);
    const handleVehiclesClick = () => {
      
      setShowVehicles(true);
      setShowVehicleRegistrations(false);
      setShowTable(true);
    };
  
    const handleVehicleRegistrationsClick = () => {
      setShowVehicles(false);
      setShowVehicleRegistrations(true);
      setShowTable(true);
    };
  
    const handleTableClose = () => {
      setShowTable(false);
    };


// if (!vehicles) {
//     return <div>Searching Database for match...</div>;
  
// }


  return (
    <div>
      <div className="card">
        <div className="card-body">
        <FontAwesomeIcon icon="fa-solid fa-flag" />                
        <h5 className="card-title">Vehicle Information</h5>
          <p>---- any flagged info such as anpr obs -----</p>
          <button className="btn btn-link" onClick={handleVehiclesClick}>
            Registered Vehicles
          </button>
          <button className="btn btn-link" onClick={handleVehicleRegistrationsClick}>
            Vehicle Registration Info 
          </button>
        </div>
      </div>

      {showTable && (showVehicles || showVehicleRegistrations) && (
        <div>
          {showVehicles && <Vehicles />}
          {showVehicleRegistrations && <VehicleRegistrations />}
          <br />
          <button className="btn btn-warning" onClick={handleTableClose}>
            Close Table
          </button>
        </div>
      )}
    </div>
  );


}
export default VehicleOverview;