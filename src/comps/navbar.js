import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const handleBackButtonClick = () => {
    if (location.pathname === "/") {
      // Reset search fields
      resetCitizenField();
      resetVehicleField();
      resetPhoneField();
      console.log("Resetting search fields");
    } else {
      navigate("/"); // Replace "/" with the appropriate URL of your search page
    }
  };

  const resetCitizenField = () => {
    const citizenField = document.getElementById("CITIZEN");
    if (citizenField) {
      citizenField.value = "";
    }
  };

  const resetVehicleField = () => {
    const vehicleField = document.getElementById("VEHICLE");
    if (vehicleField) {
      vehicleField.value = "";
    }
  };

  const resetPhoneField = () => {
    const phoneField = document.getElementById("PHONE");
    if (phoneField) {
      phoneField.value = "";
    }
  };


const handleSignOutClick = () => {
  const confirmSignOut = window.confirm("Are you sure you want to sign out?");
  if (confirmSignOut) {
    // sign out logic here, such as clearing session/storage
    navigate("/login");
  }
};

return (
  <nav className="navbar navbar-expand-lg navbar-inverse bg-dark">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <button type="button" className="btn btn-info" onClick={handleBackButtonClick}>
              {location.pathname === "/" ? "Reset" : "Search"}              </button>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/login">
            <button type="button" className="btn btn-info" onClick={handleSignOutClick}>
              Sign Out
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
};

export default Navbar;
