import React, { useState } from 'react';
import Vehicles from './vehicles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VehicleRegistrations from '../../pages/vehicleRegistrations';



const VehicleOverview = (props) => {
  const [showVehicleRegistrations, setShowVehicleRegistrations] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [hadError, setHadError] = useState();


    // const [vehicles, setVehicles] = useState (null);
    const handleVehiclesClick = () => {
      

      setShowVehicleRegistrations(false);
      setShowTable(true);
    };
  
    const handleVehicleRegistrationsClick = () => {

      setShowVehicleRegistrations(true);
      setShowTable(true);
    };
  
    const handleTableClose = () => {
      setShowTable(false);
    };
    async function fetchVehicleRegistrations() {
      try {
        const response = await fetch(`http://18.168.246.188:8080/VehicleRegistrations/citizenID/${props.citizenId}`)
        const data = await response.json();
        console.log(data);
        setShowVehicleRegistrations(data);
      } catch (error) {
        console.error('Error fetching Vehicle details:', error);
        setHadError(true);
      }
    }

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
          {/* <button className="btn btn-link" onClick={handleVehiclesClick}>
            Registered Vehicles
          </button> */}
          <button className="btn btn-link" onClick={handleVehicleRegistrationsClick}>
            Vehicle Registration Info 
          </button>
        </div>
      </div>

      {showTable &&  showVehicleRegistrations && (
        <div>
          
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