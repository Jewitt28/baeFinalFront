import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const VehicleRegistrations = () => {
  const location = useLocation();
  const [vehicleRegistrations, setVehicleRegistrations] = useState([]);
  const [hadError, setHadError] = useState(false);
  const {citizenID} = useParams();
  const [pageNo, setPageNo] = useState(0);
  const pageSize = 10;
  const navigate = useNavigate();

  useEffect(() => {
    setVehicleRegistrations([]);
    fetchVehicleRegistrations();
  }, [location.state, pageNo]);

  async function fetchVehicleRegistrations(citizenId) {
    try {
      const response = await fetch(`http://18.168.246.188:8080/VehicleRegistrations/read/read?page=${pageNo}&size=${pageSize}`);
      const data = await response.json();
      console.log(data);
      setVehicleRegistrations(data);
    } catch (error) {
      console.error('Error fetching Vehicle details:', error);
      setHadError(true);
    }
  }

  function renderVehicleRegs() {
    const filters = location.state?.filter;
    let dataToRender = vehicleRegistrations;

    if (!dataToRender) {
      return null;
    }

    if (filters && Object.keys(filters).length > 0) {
      if (filters.registrationId)
        dataToRender = dataToRender.filter(data =>
          data.registrationId.toLowerCase().includes(filters.registrationId.toLowerCase())
        );
      if (filters.citizenId)
        dataToRender = dataToRender.filter(data =>
          data.citizenId.toLowerCase().includes(filters.citizenId.toLowerCase())
        );
      if (filters.vehicleRegistrationNo)
        dataToRender = dataToRender.filter(data =>
          data.vehicleRegistrationNo.toLowerCase().includes(filters.vehicleRegistrationNo.toLowerCase())
        );
      if (filters.make)
        dataToRender = dataToRender.filter(data =>
          data.make.toLowerCase().includes(filters.make.toLowerCase())
        );
      if (filters.model)
        dataToRender = dataToRender.filter(data =>
          data.model.toLowerCase().includes(filters.model.toLowerCase())
        );
      if (filters.colour)
        dataToRender = dataToRender.filter(data =>
          data.colour.toLowerCase().includes(filters.colour.toLowerCase())
        );
      if (filters.registrationDate)
        dataToRender = dataToRender.filter(data =>
          data.registrationDate.toLowerCase().includes(filters.registrationDate.toLowerCase())
        );
    }

    console.log(dataToRender);
    if (!Array.isArray(dataToRender) || dataToRender.length === 0) {
      return <tr><td colSpan={8}>No records found</td></tr>;
    }
    
    

    return dataToRender.map(data => (
      <tr key={data.registrationId}>
        <td>{data.registrationId}</td>
        <td>{data.registrationDate}</td>
        <td>{data.vehicleRegistrationNo}</td>

        <td>{data.citizenId}</td>
        <td>{data.make}</td>
        <td>{data.model}</td>
        <td>{data.colour}</td>
        
          <td><button type="text">Overview</button>
        </td>
      </tr>
    ));
  }

  function previousPage(event) {
    if (pageNo > 0) setPageNo(pageNo - 1);
  }

  function nextPage(event) {
    setPageNo(pageNo + 1);
    console.log("PAGE:" + pageNo);
  }

  if (!hadError && vehicleRegistrations.length === 0) {
    return <div>Loading data from API...</div>;
  }
  if (hadError) return <div>Something went wrong loading the data, please try again at a later time!</div>;

  return (
    <div>
      <table className="vehicleRegistrations-table" style={{ backgroundColor: "whitesmoke" }}>
        <thead>
          <tr>
            <th>Registration ID</th>
            <th>Registration Date</th>

            <th>Citizen ID</th>
            <th>Vehicle Reg No</th>
            <th>Make</th>
            <th>Model</th>
            <th>Colour</th>
          </tr>
        </thead>
        <tbody>{renderVehicleRegs()}</tbody>
      </table>
      <div className="btn-group">
        {pageNo > 0 && <button type="text" onClick={previousPage}>Previous</button>}
        <button type="text" onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default VehicleRegistrations;
