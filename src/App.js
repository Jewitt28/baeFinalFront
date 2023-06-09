import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom';
import './comps/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Search from './comps/search';
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
import CitizenContext from './store/citizen-context';



function App() {


  const citizenCtx = useContext(CitizenContext);
  const isCitizenSelected = citizenCtx.isCitizenSelected();
  const [citizen, setCitizen] = useState([]);
  const [citizenFound, setCitizenFound] = useState(false);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const fetchCitizen = async () => {
      try {
        console.log(1)
        const response = await fetch('http://localhost:8080/citizens/read');

        const data = await response.json();
        setCitizen(data);

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

    fetchCitizen();
  }, [userInput]);

  console.log(2)




return (



  <Routes>
    <Route exact path="/" element={isCitizenSelected ? <Overview /> : <Search />} />
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
    <Route path="/vehicleOverview" element={<VehicleOverview />} />

  </Routes>
);

const iconList = [faSearch, faCreditCard];

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<Search />);
};
export default App;
