import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Citizens = () => {
  const location = useLocation();
  const [citizen, setCitizen] = useState(null);
  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    // Fetch citizen details based on citizenId from location state or URL params
    const citizenId = location.state?.citizenId || ''; // Assuming citizenId is passed in location state
    fetchCitizenDetails(citizenId);
  }, [location.state]);

  async function fetchCitizenDetails(citizenId) {
    try {
      // Make an API call to fetch citizen details
      const response = await fetch(`http://18.168.246.188/citizen/read/${citizenId}`)//(`http://http://dataset.c7d3rtdqfpxc.eu-west-2.rds.amazonaws.com/citizen`);
      const data = await response.json();
      setCitizen(data);
    } catch (error) {
      console.error('Error fetching citizen details:', error);
    }
  }



  if (!citizen) {
    return <div>Searching Database for match...</div>;
  }


  return (
    <div>
      <h1>Citizen Details</h1>
      <div className="citCard">
        <div className="card-body">
          <h5 className="card-title">{citizen.forenames} {citizen.surname}</h5>
          <p className="card-text">Date of Birth: {citizen.dateOfBirth}</p>
          <p className="card-text">Place of Birth: {citizen.placeOfBirth}</p>
          <p className="card-text">Home Address: {citizen.address}</p>
          <p className="card-text">Sex: {citizen.sex}</p>
          <p className="card-text">Drivers License ID: {citizen.driverLicenseID}</p>
          {/* Render additional details and related data from other tables */}
        </div>
      </div>
      
      
    </div>
  );
};

export default Citizens;
