import React from 'react';
import Vehicles from './vehicles';
import Money from './money';
import Phone from './phone';
import Location from './location';
import BankAccountHolders from './bankAccountHolders'; // Import BankAccountHolders component
import BankCards from './bankCards'; // Import BankCards component

function Overview() {
  const [activeTab, setActiveTab] = React.useState('Vehicles');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Vehicles':
        return <Vehicles />;
      case 'FinancialInfo':
        return <Money />;
      case 'Phone':
        return <Phone />;
      case 'Location':
        return <Location />;
      case 'BankAccountHolders': // Include BankAccountHolders case
        return <BankAccountHolders />;
      case 'BankCards': // Include BankCards case
        return <BankCards />;
      default:
        return null;
    }
  };

  return (
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
        <p className="card-text">citizen.forenames | citizen.surname</p>
        {renderTabContent()}
        <button className="btn btn-primary">Return To Search</button>
      </div>
    </div>
  );
}

export default Overview;
