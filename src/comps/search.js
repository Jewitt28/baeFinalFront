import React, { useState, useEffect, useContext  } from 'react';
import CitizenContext from '../store/citizen-context';

const Search = ()  => {
  const citizenCtx = useContext(CitizenContext);
  const [citizens, setCitizens] = useState([]);
  const [citizenFound, setCitizenFound] = useState(false);
  // const [userInput, setUserInput] = useState('');  
  const [forenames, setForename] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const fetchCitizen = async () => {
      try {
        console.log(1)
        const response = await fetch('http://localhost:8080/citizen/read');
        const data = await response.json();
        setCitizens(data);

        // // Check if there is a matching citizen
        // const isCitizenFound = data.some((c) =>
        //   // Your matching condition logic here
        //   // For example, if citizen.name matches user input, set it to true
        //    c.forenames === forenames && c.surname === lastName
        //   );
        // setCitizenFound(isCitizenFound);
      } catch (error) {
        console.error('Error fetching citizens:', error);
      }
    };

    fetchCitizen();
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();

    //setUserInput(true);

    const matchingCitizen = citizens.find(
      (c) => c.forenames === forenames && c.surname === lastName
    );
    if (matchingCitizen) {
      citizenCtx.selectCitizen(matchingCitizen);
     


    
    };
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          id="forenames"
          name="forenames"
          placeholder="First Name"
          value={forenames}
          onChange={(e) => setForename(e.target.value)}
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className=" submit btn btn-outline-primary">Submit</button>
        
      </form>
    </div>
  );
};

export default Search;
