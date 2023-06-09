import React, { useContext } from 'react';
import VehicleOverview from './vehicleOverview';
import Money from './money';
import Phone from './phone';
import Location from './location';
import BankAccountHolders from './bankAccountHolders'; 
import BankCards from './bankCards'; 
import CitizenContext from '../store/citizen-context';
function Overview() {
  const [activeTab, setActiveTab] = React.useState('Vehicles');
  const { citizen } = useContext(CitizenContext);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Vehicles':
        return <VehicleOverview />;
      case 'FinancialInfo':
        return <Money />;
      case 'Phone':
        return <Phone />;
      case 'Location':
        return <Location />;
      case 'BankAccountHolders':
        return <BankAccountHolders />;
      case 'BankCards':
        return <BankCards />;
      default:
        return null;
    }
  };

  return (
    <><div className="card">
    <div className="row g-0">
      <div className="col-md-8">
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
      <div className="col-md-4">
        <img src={citizen.pictureUrl} alt="Citizen" className="img-fluid" />
      </div>
    </div>
  </div>

  <br />
      <div className="card text-center">
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
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">{citizen.forenames} | {citizen.surname}</p>
          {renderTabContent()}
          <br />
          <button className="btn btn-dark">Return To Search</button>
        </div>
      </div>
    </>
  );
}

export default Overview;
