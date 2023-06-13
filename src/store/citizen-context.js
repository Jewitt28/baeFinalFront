import React, { createContext, useState } from "react";
//import { Link } from "react-router-dom";



export const CitizenContext = createContext({

    citizen: {
        citizenId: 0,
        forenames: '',
        surname: '',
        address: '',
        dateOfBirth: "01 / 01 / 01",
        placeOfBirth: '',
        sex: '',
    },
    
selectCitizen:(suspect) => {},
clearSelectedCitizen:() =>{},
isCitizenSelected:() =>{},

});

export function CitizenContextProvider(props) {
    const [selectedCitizen, setSelectedCitizen] = useState({

        citizen: {
            citizenId: 0,
            forenames: '',
            surname: '',
            address: '',
            dateOfBirth: "01 / 01 / 01",
            placeOfBirth: '',
            sex: '',
        }
    }

    )

    function selectCitizenHandler(suspect) {

        setSelectedCitizen({
            ...selectedCitizen, citizen: {
                citizenId: suspect.citizenId,
                forenames: suspect.forenames,
                surname: suspect.surname,
                address: suspect.address,
                dateOfBirth: suspect.dateOfBirth,
                placeOfBirth: suspect.placeOfBirth,
                sex: suspect.sex,
            }


        })


    }
    function clearSelectedCitizenHandler() {

        setSelectedCitizen({
            ...selectedCitizen, citizen: {
                citizenId: 0,
                forenames: '',
                surname: '',
                address: '',
                dateOfBirth: "01 / 01 / 01",
                placeOfBirth: '',
                sex: '',
            }
        })

    }

    function isCitizenSelectedHandler() {

        return  selectedCitizen.citizen.citizenId!==0


    }
const context = {

    citizen:selectedCitizen,
    selectCitizen:selectCitizenHandler,
    clearSelectedCitizen:clearSelectedCitizenHandler,
    isCitizenSelected:isCitizenSelectedHandler

    
};

    return (
        <CitizenContext.Provider value={context}>
            {props.children}
        
        </CitizenContext.Provider>
    

    );

}

export default CitizenContext;