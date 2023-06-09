import React, { useState, useEffect } from 'react';

const AnprCamera = () => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    // Fetch the data from your backend API or server
    fetchAnprCameras()
      .then(data => {
        setCameras(data);
      })
      .catch(error => {
        console.error('Error fetching ANPR cameras:', error);
      });
  }, []);

  const fetchAnprCameras = async () => {
    try {
      const response = await fetch('http://18.168.246.188:8080/anpr-cameras');
      if (!response.ok) {
        throw new Error('An error occurred while fetching ANPR cameras data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h2>ANPR Cameras</h2>
      <table>
        <thead>
          <tr>
            <th>ANPR ID</th>
            <th>Street Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {cameras.map(data => (
            <tr key={data.anprId}>
              <td>{data.anprId}</td>
              <td>{data.streetName}</td>
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
};

export default AnprCamera;
