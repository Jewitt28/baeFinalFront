import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [citizens, setCitizens] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCitizens = async () => {
      try {
        const response = await fetch('http://localhost:3306/citizens');
        if (!response.ok) {
          throw new Error('An error occurred while fetching citizens data.');
        }
        const data = await response.json();
        setCitizens(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCitizens();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the firstName and lastName match a record in the citizens database
    const isValidCitizen = citizens.some(
      (citizen) =>
        citizen.firstName === firstName && citizen.lastName === lastName
    );

    if (isValidCitizen) {
      // Redirect to the main application
      navigate('/App');
    } else {
      // Handle invalid input or display an error message
      alert('Invalid input. Please try again.');
    }
  };

  return (
    <div>
      <h2>Citizen Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <li> <button type="submit">Submit</button> </li>
      </form>
    </div>
  );
};

export default LandingPage;
