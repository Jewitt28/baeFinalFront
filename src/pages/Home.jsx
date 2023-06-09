import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {

    const navigate = useNavigate();
    const [searchMethod, setSearchMethod] = useState("CITIZEN");
    const [citizenFilters, setCitizenFilters] = useState({});
    const [vehicleFilters, setVehicleFilters] = useState({});

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
                break;
        }
    }

    return (
        <>
            <h1>ANPR Database Search:</h1>
            <div>
                <form>
                    <label for="searchMethod">Search by: </label>
                    <select id="searchMethod" onChange={handleSearchMethodChange}>
                        <option value="CITIZEN">Citizen</option>
                        <option value="VEHICLE">Vehicle</option>
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
                        <label for="manufacturer">Manufacturer: </label>
                        <input type="text" id="manufacturer" name="manufacturer" value={vehicleFilters.manufacturer || ""} onChange={handleSearchFormChange} />
                    </div>
                     <div class="form-group">
                        <button type="submit">Search</button>
                    </div>
                </form>}
            </div>
        </>
    );
}