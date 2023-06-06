import React, { useState } from 'react';
import Vehicles from './vehicles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VehicleOverview = () => {

    const [vehicles, setVehicles] = useState (null);



if (!vehicles) {
    return <div>Searching Database for match...</div>;
  
}

return (

<div>


      <h2>Vehicle Registration Information</h2>
      <div className="card">
        <div className="card-body">
        <FontAwesomeIcon icon="fa-duotone fa-car" />
        
          <h5 className="card-title">Registered Vehicles:{vehicles.vehicleRegistrationNo}</h5>
          <p className="card-text">Make: {vehicles.make}</p>
          <p className="card-text">Model: {vehicles.model}</p>
          <p className="card-text">Colour: {vehicles.colour}</p>
          <Link className="card-link" to={"/vehicleRegistrations"}>More Info</Link>
          
        </div>
</div>
</div>

)


}
export default VehicleOverview;