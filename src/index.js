import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './comps/index.css';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { CitizenContextProvider } from './store/citizen-context';
import App from './App';

const RootComponent = () => {
  const [citizenFound, setCitizenFound] = useState(false);

  return (
    <React.StrictMode>
      <CitizenContextProvider>
      <Router>
        < App />
      </Router>
      </CitizenContextProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));
