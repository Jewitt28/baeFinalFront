import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faCreditCard} from '@fortawesome/free-solid-svg-icons';
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

  export default NavigationBar;