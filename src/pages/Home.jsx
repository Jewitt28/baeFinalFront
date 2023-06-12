import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../comps/navbar";


export default function Home(props) {

    const navigate = useNavigate();
    const [searchMethod, setSearchMethod] = useState("CITIZEN");
    const [citizenFilters, setCitizenFilters] = useState({});
    const [vehicleFilters, setVehicleFilters] = useState({});
    const [phoneFilters, setPhoneFilters] = useState({});

    function handleSearchMethodChange(event) {
        setSearchMethod(event.target.value);
    }

    function handleSearchFormChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        switch (searchMethod) {
            case "CITIZEN":
                setCitizenFilters(previousState => ({ 
                    ...previousState, 
                    [name]: value
                }));
                break;
            case "VEHICLE":
                setVehicleFilters(previousState => ({
                    ...previousState,
                    [name]: value
                }));
                break;
                case "PHONE":
                setPhoneFilters(previousState => ({
                    ...previousState,
                    [name]: value
                }));
                break;
        }
    }

    function handleSearchSubmission(event) {
        event.preventDefault();

        switch (searchMethod) {
            case "CITIZEN":
                navigate("/citizens", {
                    state: {
                        filter: citizenFilters
                    }
                });
                break;
            case "VEHICLE":
                navigate("/VehicleRegistrations", {
                    state: {
                        filter: vehicleFilters
                    }
                })
                break;
                case "PHONE":
                    navigate("/subscriberRecords", {
                        state: {
                            filter: phoneFilters
                        }
                    });
                    break;
        }
    }

    return (
        <>
        <Navbar />
            <h1>UK Citizen Database Search:</h1>
            <div>
                <form id="citSearch">
                    <label for="searchMethod">Search by: </label>
                    <select id="searchMethod" onChange={handleSearchMethodChange}>
                        <option value="CITIZEN">Citizen</option>
                        <option value="VEHICLE">Vehicle</option>
                        <option value = "PHONE">Phone</option>
                    </select>
                </form>
                {/* conditionally render the correct form based on the selected search method */}
                {searchMethod === "CITIZEN" && <form onSubmit={handleSearchSubmission}>
                    <div class="form-group">
                        <label for="forename">Forenames: </label>
                        <input type="text" id="forenames" name="forenames" value={citizenFilters.forenames || ""} onChange={handleSearchFormChange} />
                    </div>
                     <div class="form-group">
                        <label for="surname">Surname: </label>
                        <input type="text" id="surname" name="surname" value={citizenFilters.surname || ""} onChange={handleSearchFormChange} />
                    </div>
                     <div class="form-group">
                        <label for="startYear">Start year (DoB): </label>
                        <input type="number" placeholder="YYYY" step={1} min={1900} max={new Date().getFullYear()} id="startYear" name="startYear" value={citizenFilters.startYear || ""} onChange={handleSearchFormChange} />
                    </div>
                     <div class="form-group">
                        <label for="endYear">End year (DoB): </label>
                        <input type="number" placeholder="YYYY" step={1} min={1900} max={new Date().getFullYear()} id="endYear" name="endYear" value={citizenFilters.endYear || ""} onChange={handleSearchFormChange} />
                    </div>
                     <div class="form-group">
                        <button type="submit">Search</button>
                    </div>
                </form>}
                {/* Vehicle search form */}
                {searchMethod === "VEHICLE" && <form onSubmit={handleSearchSubmission}>
                
                    <div class="form-group">
                        <label for="address"> Address: </label>
                        <input type="text" id="address" name="address" value={vehicleFilters.address || ""} onChange={handleSearchFormChange} />
                    </div>
                    <div class="form-group">
                        <label for="citizenId">Citizen ID: </label>
                        <input type="text" id="citizenId" name="citizenId" value={vehicleFilters.citizenId || ""} onChange={handleSearchFormChange} />
                    </div>
                    <div class="form-group">
                        <label for="registrationNo">Registration No: </label>
                        <input type="text" id="registrationNo" name="registrationNo" value={vehicleFilters.registrationNo || ""} onChange={handleSearchFormChange} />
                    </div>
                    <div class="form-group">
                        <label for="make">Make: </label>
                        <input type="text" id="make" name="make" value={vehicleFilters.make || ""} onChange={handleSearchFormChange} />
                    </div>
                    <div class="form-group">
                        <label for="model">Model: </label>
                        <input type="text" id="model" name="model" value={vehicleFilters.model || ""} onChange={handleSearchFormChange} />
                    </div>
                    <div class="form-group">
                        <label for="colour">Colour: </label>
                        <input type="text" id="colour" name="colour" value={vehicleFilters.colour || ""} onChange={handleSearchFormChange} />
                    </div>
                     <div class="form-group">
                        <button type="submit">Search</button>
                    </div>
                </form>}
                {searchMethod === "PHONE" && <form onSubmit={handleSearchSubmission}>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number: </label>
                        <input type="text" id="phoneNumber" name="phoneNumber" value={phoneFilters.phoneNumber || ""} onChange={handleSearchFormChange} />
                    </div>
                     <div class="form-group">
                        <label for="network">Network: </label>
                        <input type="text" id="network" name="network" value={phoneFilters.network || ""} onChange={handleSearchFormChange} />
                    </div>
                     <div class="form-group">
                        <button type="submit" className=" submit btn btn-outline-info">Search</button>
                    </div>
                </form>}
            </div>
        </>
    );
}