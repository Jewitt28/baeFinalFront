import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Search from './search';
import Citizen from './citizens';


const Root = () => {
  const [citizenFound, setCitizenFound] = useState(false);
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    const fetchCitizens = async () => {
      try {
        const response = await fetch('http://localhost:3306/citizens/read');
        const data = await response.json();
        setCitizens(data);
      } catch (error) {
        console.error('Error fetching citizens:', error);
      }
    };

    fetchCitizens();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/citizen">Citizen</Link>
          </li>
          {/* Add other navigation links here */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Search citizens={citizens} setCitizenFound={setCitizenFound} />} />
        <Route path="/citizen" element={<Citizen />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
};

export default Root;
