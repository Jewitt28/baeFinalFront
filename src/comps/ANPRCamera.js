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
      const response = await fetch('http://localhost:3000/anpr-cameras');
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
          </tr>
        </thead>
        <tbody>
          {cameras.map(camera => (
            <tr key={camera.anprId}>
              <td>{camera.anprId}</td>
              <td>{camera.streetName}</td>
              <td>{camera.latitude}</td>
              <td>{camera.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnprCamera;
