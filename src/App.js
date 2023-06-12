import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom';
import './comps/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Search from './comps/search';
import ANPRCamera from './comps/GPS/ANPRCamera';
import ANPRObservations from './comps/GPS/ANPRObservations';
import Money from './comps/money';
import Citizens from './pages/citizens';
import Vehicles from './comps/Vehicle/vehicles';
import MobileCallRecords from './comps/Communications/mobileCallRecords';
import Phone from './comps/Communications/phone';
import Location from './comps/location';
import CellTower from './comps/Communications/cellTowers';
import VehicleRegistrations from './pages/vehicleRegistrations';
import ATMPoint from './comps/Finance/ATMPoint';
import ATMTransactions from './comps/Finance/ATMTransactions';
import BankCards from './comps/Finance/bankCards';
import BankAccountHolders from './comps/Finance/bankAccountHolders';
import EPOSTransactions from './comps/Finance/EPOSTransactions';
import SubscriberRecords from './pages/subscriberRecords';
import Overview from './pages/overview';
import VehicleOverview from './comps/Vehicle/vehicleOverview';
// import CitizenContext from './store/citizen-context';
import Home from './pages/Home';
import Login from './comps/login';
import { Navbar } from 'react-bootstrap';



function App() {


  // const citizenCtx = useContext(CitizenContext);
  // const isCitizenSelected = citizenCtx.isCitizenSelected();
  // const [citizen, setCitizen] = useState([]);
  // const [citizenFound, setCitizenFound] = useState(false);
  // const [userInput, setUserInput] = useState('');

  // useEffect(() => {
  //   const fetchCitizen = async () => {
  //     try {
  //       const response = await fetch('http://18.168.246.188:8080/citizen/read');

  //       const data = await response.json();
  //       setCitizen(data);

        // Check if there is a matching citizen
        // const isCitizenFound = data.some((citizen) =>
          // Your matching condition logic here
          // For example, if citizen.name matches user input, set it to true
          // citizen.name === userInput
  //       );
  //       setCitizenFound(isCitizenFound);
  //     } catch (error) {
  //       console.error('Error fetching citizens:', error);
  //     }
  //   };

  //   fetchCitizen();
  // }, [userInput]);





return (



  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path="/search" element={<Search />} />
    <Route path="/ATMPoint" element={<ATMPoint />} />
    <Route path="/login" element={<Login />} />
    <Route path="/ATMTransactions" element={<ATMTransactions />} />
    <Route path="/navbar" element={<Navbar />} />

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
    <Route path="/vehicleRegistrations" element={<VehicleRegistrations />} />
    <Route path="/cellTowers" element={<CellTower />} />
    <Route path="/mobileCallRecords" element={<MobileCallRecords />} />
    <Route path="/overview/:citizenID" element={<Overview />} />
    <Route path="/vehicleOverview" element={<VehicleOverview />} />
    <Route path='/search' element={<Search />} />
  </Routes>
);

const iconList = [faSearch, faCreditCard];


};
export default App;
