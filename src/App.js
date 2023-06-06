import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './comps/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from './comps/search'; // Import the Search component
import InputForm from './comps/inputform';
import ANPRCamera from './comps/ANPRCamera';
import ANPRObservations from './comps/ANPRObservations';
import LandingPage from './comps/landingPage';
import Money from './comps/money';
import Citizens from './comps/citizens';
import Vehicles from './comps/vehicles';
import MobileCallRecords from './comps/mobileCallRecords';
import Phone from './comps/phone';
import Location from './comps/location';
import CellTower from './comps/cellTowers';
import VehicleRegistrations from './comps/vehicleRegistrations';
import ATMPoint from './comps/ATMPoint';
import ATMTransactions from './comps/ATMTransactions';
import BankCards from './comps/bankCards';
import BankAccountHolders from './comps/bankAccountHolders';
import EPOSTransactions from './comps/EPOSTransactions';
import SubscriberRecords from './comps/subscriberRecords';
import Overview from './comps/overview';
import VehicleOverview from './comps/vehicleOverview';


const App = () => {
  const NavigationBar = () => {
    return (
      <nav className="navbar navbar-inverse navbar-expand-sm navbar-dark bg-dark" id="topNavBar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link className="nav-link" to="/landingPage">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav nav">
              <li className="nav-item">
                <Link className="nav-link" to="/money">
                  Financial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vehicle">
                  Vehicle information
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/phone">
                  Mobile Phone Information
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mobileCallRecords">
                  Phone Records
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/location">
                  Geographical information
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ANPRCamera">
                  ANPR Cameras
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ANPRObservations">
                  ANPR Observations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  const Root = () => {
    const [citizens, setCitizens] = useState([]);
    const [citizenFound, setCitizenFound] = useState(false);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
      const fetchCitizens = async () => {
        try {
          const response = await fetch('http://localhost:3306/citizens/read');
          const data = await response.json();
          setCitizens(data);

          // Check if there is a matching citizen
          const isCitizenFound = data.some((citizen) =>
            // Your matching condition logic here
            // For example, if citizen.name matches user input, set it to true
            citizen.name === userInput
          );
          setCitizenFound(isCitizenFound);
        } catch (error) {
          console.error('Error fetching citizens:', error);
        }
      };

      fetchCitizens();
    }, [userInput]);

    return (
      <div>
        {citizenFound && <NavigationBar />}
        <Search citizens={citizens} setCitizenFound={setCitizenFound} />
      </div>
    );
  };

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="/inputform" element={<InputForm />} />
          <Route path="/ATMPoint" element={<ATMPoint />} />
          <Route path="/ATMTransactions" element={<ATMTransactions />} />
          <Route path="/bankCards" element={<BankCards />} />
          <Route path="/bankAccountHolders" element={<BankAccountHolders />} />
          <Route path="/EPOSTerminal" element={<EPOSTransactions />} />
          <Route path="/EPOSTransactions" element={<EPOSTransactions />} />
          <Route path="/subscriberRecords" element={<SubscriberRecords />} />
          <Route path="/citizens" element={<Citizens />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/money" element={<Money />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/mobileCallRecords" element={<MobileCallRecords />} />
          <Route path="/location" element={<Location />} />
          <Route path="/ANPRCamera" element={<ANPRCamera />} />
          <Route path="/ANPRObservations" element={<ANPRObservations />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/vehicleRegistrations" element={<VehicleRegistrations />} />
          <Route path="/cellTowers" element={<CellTower />} />
          <Route path="/mobileCallRecords" element={<MobileCallRecords />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/vehicleOverview"  element={<VehicleOverview />} />

        </Routes>
      </Router>
    </React.StrictMode>
  );
};

 createRoot(document.getElementById('root')).render(<App />);

export default App;