import React, { useContext, useEffect, useState } from 'react';
import VehicleOverview from '../comps/Vehicle/vehicleOverview';
import Money from '../comps/money';
import Phone from '../comps/Communications/phone';
import Location from '../comps/location';
import BankAccountHolders from '../comps/Finance/bankAccountHolders'; 
import BankCards from '../comps/Finance/bankCards'; 
// import CitizenContext from '../store/citizen-context';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import Navbar from '../comps/navbar';


function Overview() {
  const [activeTab, setActiveTab] = React.useState('Vehicles');
  //const { citizen } = useContext(CitizenContext);
  const [citizen, setCitizen] = useState([]); 
  const [registrations, setRegistrations] = useState ([]);
  const location = useLocation ;
  const [hadError, setHadError] = useState(false);
  const {citizenID} = useParams();
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);


  useEffect(() => {
    console.log(location.state)
   
    fetchCitizenDetails();
  }, [location.state]);

  async function fetchCitizenDetails(citizenId) {
    try {
      // Make an API call to fetch citizen details
      const response = await fetch(`http://18.168.246.188:8080/citizen/read/${citizenID}`);
      const data = await response.json();
      console.log(data);
      setCitizen(data);
    } catch (hadError) {
      console.error('Error fetching citizen details:', hadError);
      setHadError(true);
    }
  }
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
    async function fetchVehicleRegistrations(citizenId) {
    try {
      const response = await fetch(`http://18.168.246.188:8080/VehicleRegistrations/read/${citizenID}`)
      const data = await response.json();
      console.log(data);
      setRegistrations(data);
    } catch (error) {
      console.error('Error fetching Vehicle details:', error);
      setHadError(true);
    }
  }
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Vehicles':
        return <VehicleOverview citizenId={citizenID}/>;
      case 'FinancialInfo':
        return <Money />;
      case 'Phone':
        return <Phone />;
      case 'Location':
        return <Location />;
      case 'BankAccountHolders':
        return <BankAccountHolders bankAccountId={''}/>;
      case 'BankCards':
        return <BankCards />;
      default:
        return null;
    }
  };
  function backToSearch() {
    Navigate("/");
  }
  return (
    <>
      
    < Navbar /> 

  <br />
      <div className="card text-center" id='overCard'>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'Vehicles' ? 'active' : ''}`}
                onClick={() => handleTabChange('Vehicles')}
              >
                Vehicles
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'FinancialInfo' ? 'active' : ''}`}
                onClick={() => handleTabChange('FinancialInfo')}
              >
                Financial Info
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'Phone' ? 'active' : ''}`}
                onClick={() => handleTabChange('Phone')}
              >
                Phone
              </button>
            </li>
          </ul>
        </div>
        {/* <div className="col-lg-4">
        <img src={citizen.pictureUrl} alt="Citizen" className="img-fluid" />
      </div> */}
        <div className="card-body">
          <h5 className="card-title"></h5>
          <h5 className="card-title">{citizen.forenames} {citizen.surname}</h5>
          <p className="card-text">Date of Birth: {citizen.dateOfBirth}</p>
          <p className="card-text">Place of Birth: {citizen.placeOfBirth}</p>
          <p className="card-text">Home Address: {citizen.address}</p>
          <p className="card-text">Sex: {citizen.sex}</p>
          <p className="card-text">Drivers License ID: {citizen.driverLicenseID}</p>
          {renderTabContent()}
          <br />
          <button className="btn btn-dark" onClick= {backToSearch} >Return To Search</button>
        </div>
      </div>
    </>
  );
}

export default Overview;
