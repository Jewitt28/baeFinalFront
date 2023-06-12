import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Citizens = () => {
  const location = useLocation();
  const [citizen, setCitizen] = useState([]);
  const [hadError, setHadError] = useState(false);
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    setCitizen([]);
    fetchCitizenDetails();
  }, [location.state, pageNo]);

  async function fetchCitizenDetails() {
    try {
      const response = await fetch(`http://18.168.246.188:8080/citizen/read?page=${pageNo}&size=${pageSize}`);
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
      if (filters.forenames)
        dataToRender = dataToRender.filter(data =>
          data.forenames.toLowerCase().includes(filters.forenames.toLowerCase())
        );
      if (filters.surname)
        dataToRender = dataToRender.filter(data =>
          data.surname.toLowerCase().includes(filters.surname.toLowerCase())
        );
      if (filters.startYear)
        dataToRender = dataToRender.filter(data => {
          const dob = new Date(data.dateOfBirth);
          return dob.getFullYear() >= filters.startYear;
        });
      if (filters.endYear)
        dataToRender = dataToRender.filter(data => {
          const dob = new Date(data.dateOfBirth);
          return dob.getFullYear() <= filters.endYear;
        });
    }
    console.log(dataToRender); // Check the value of dataToRender

    if (!Array.isArray(dataToRender)) {
      return null; // or any appropriate error handling
    }

    return dataToRender.map(data => (
      <tr key={data.citizenId}>
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

  const handleOverviewClick = citizenId => {
    navigate(`/overview/${citizenId}`);
  };

  function previousPage(event) {
    if (pageNo > 0) setPageNo(pageNo - 1);
  }

  function nextPage(event) {
    setPageNo(pageNo + 1);
    console.log("PAGE:" + pageNo)
  }

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
      <div className="btn-group">
        {pageNo > 0 && <button type="text" onClick={previousPage}>Previous</button>}
        <button type="text" onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Citizens;
