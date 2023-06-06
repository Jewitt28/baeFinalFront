import React, { useState } from 'react';

const Search = ({ citizens, setCitizenFound }) => {
  const [forenames, setForename] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const matchingCitizen = citizens.find(
      (citizen) => citizen.forenames === forenames && citizen.surname === lastName
    );
    if (matchingCitizen) {
      setCitizenFound(true);
    }
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
