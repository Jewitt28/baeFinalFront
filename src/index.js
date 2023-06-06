import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './comps/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './comps/search';
import Citizens from './comps/citizens';
import App from './App';
import Root from './comps/root';
import InputForm from './comps/inputform';
import ANPRCamera from './comps/ANPRCamera';
import ANPRObservations from './comps/ANPRObservations';
import LandingPage from './comps/landingPage';
import Money from './comps/money';
import Vehicles from './comps/vehicles';
import MobileCallRecords from './comps/mobileCallRecords';
import Phone from './comps/phone';
import Location from './comps/location';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CellTower from './comps/cellTowers';
import VehicleRegistrations from './comps/vehicleRegistrations';
import ATMPoint from './comps/ATMPoint';
import ATMTransactions from './comps/ATMTransactions';
import BankCards from './comps/bankCards';
import BankAccountHolders from './comps/bankAccountHolders';
import EPOSTransactions from './comps/EPOSTransactions';
import SubscriberRecords from './comps/subscriberRecords';
// import Tester from './comps/tester';

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
                Fincancial
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

const RootComponent = () => {
  const [citizenFound, setCitizenFound] = useState(false);

  return (
    <React.StrictMode>
      <Router>
        {citizenFound && <NavigationBar />}

        {/* <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/App" element={<App />} />
          <Route path="/inputform" element={<InputForm />} />
          <Route path="/ATMPoint" element={<ATMPoint />} />
          {/* <Route path="/root" element={<Root />} /> 
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
        

        </Routes> */}
      </Router> 
    </React.StrictMode>
  );
};

{/* ReactDOM.render(<RootComponent />, document.getElementById('root')); */}

reportWebVitals();
