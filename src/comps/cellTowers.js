import React, { useEffect, useState } from 'react';

const CellTower = ({ cellTowerId, operator, towerType, latitude, longitude }) => {
  const [cellTower, setCellTower] = useState([]);

  useEffect(() => {
    // Perform any side effects or data fetching related to the cell tower here
    // This effect will run when the component mounts and whenever any of the props change

    // Example: Fetch additional data related to the cell tower
    const fetchData = async () => {
      try {
        // Make an API call to fetch additional data based on the cell tower ID
        const response = await fetch(`http://localhost:3306/${cellTowerId}`);
        const data = await response.json();

        // Set the fetched data to the cellTower state
        setCellTower(data);
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

      <table style={{ backgroundColor: "whitesmoke" }}>
        <thead>
          <tr>
            <th>Cell Tower ID</th>
            <th>Operator</th>
            <th>Tower Type</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cellTower.map(data => (
            <tr key={data.cellTowerId}>
              <td>{data.cellTowerId}</td>
              <td>{data.operator}</td>
              <td>{data.type}</td>
              <td>{data.latitude}</td>
              <td>{data.longitude}</td>
              <td>
                <button type="text">Overview</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CellTower;
