import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Citizens = () => {
  const location = useLocation();
  const [citizen, setCitizen] = useState([]);
  const [hadError, setHadError] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    console.log(location.state)
   
    fetchCitizenDetails();
  }, [location.state]);

  async function fetchCitizenDetails() {
    try {
      // Make an API call to fetch citizen details
      const response = await fetch(`http://18.168.246.188:8080/citizen/read`)
      //  {${citizenId}`)(`http://http://dataset.c7d3rtdqfpxc.eu-west-2.rds.amazonaws.com/citizen`);
    
      const data = await response.json();
      console.log(data);
      setCitizen(data);
    } catch (error) {
      console.error('Error fetching citizen details:', error);
      setHadError(true);
    }
  }

  function renderCitizens() {
    const filters = location.state.filter;
    let dataToRender = citizen;
    if (filters && Object.keys(filters).length > 0) {
      // filter out citizens which don't match the filters
      if (filters.forenames) dataToRender = dataToRender.filter(data => data.forenames.toLowerCase().includes(filters.forenames.toLowerCase()));
    if (filters.surname) dataToRender = dataToRender.filter(data => data.surname.toLowerCase().includes(filters.surname.toLowerCase()));
      if (filters.startYear) dataToRender = dataToRender.filter(data => {
        const dob = new Date(data.dateOfBirth);
        if (dob.getFullYear() >= filters.startYear) return true;
        else return false;
      });
      if (filters.endYear) dataToRender = dataToRender.filter(data => {
        const dob = new Date(data.dateOfBirth);
        if (dob.getFullYear() <= filters.endYear) return true;
        else return false;
      })
    }
   
    // render the citizen data
    return dataToRender.map(data => (
      <tr>
        <td>{data.citizenId}</td>
        <td>{data.forenames}</td>
        <td>{data.surname}</td>
        <td>{data.address}</td>
        <td>{data.dateOfBirth}</td>
        <td>
        <button type="button" className="overview-button" onClick={() => handleOverviewClick(data.citizenId)}>
            Overview
          </button>
        </td>
      </tr>
    ));
  }

  const handleOverviewClick = (citizenId) => {
    navigate(`/overview/${citizenId}`);
  };

  if (!hadError && citizen.length === 0) {
    return <div>Loading data from API...</div>;
  }
  if (hadError) return <div>Something went wrong loading the data, please try again at a later time!</div>;

  return (
    <div>
      <h1>Citizen Details</h1>

      <table className="citizens-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Forenames</th>
            <th>Surname</th>
            <th>Address</th>
            <th>Date of birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderCitizens()}</tbody>
      </table>
    </div>
  );
};

export default Citizens;