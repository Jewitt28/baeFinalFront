import React, { useEffect } from 'react';

const CellTower = ({ cellTowerId, operator, towerType, latitude, longitude }) => {
  useEffect(() => {
    // Perform any side effects or data fetching related to the cell tower here
    // This effect will run when the component mounts and whenever any of the props change
    
    // Example: Fetch additional data related to the cell tower
    const fetchData = async () => {
      try {
        // Make an API call to fetch additional data based on the cell tower ID
        const response = await fetch(`http://localhost/3306/${cellTowerId}`);
        const data = await response.json();
        
        // Do something with the fetched data
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
    
    // Clean up the effect if necessary
    return () => {
      // Perform any cleanup tasks here (e.g., cancel any pending requests, unsubscribe from event listeners)
      console.log('Component unmounted');
    };
  }, [cellTowerId]);

  return (
    <div>
      <h2>Cell Tower Details</h2>
      <p>Cell Tower ID: {cellTowerId}</p>
      <p>Operator: {operator}</p>
      <p>Tower Type: {towerType}</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
};

export default CellTower;
