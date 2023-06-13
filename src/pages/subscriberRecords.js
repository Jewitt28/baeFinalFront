import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SubscriberRecords = () => {
  const location = useLocation();

  const [subscribers, setSubscribers] = useState([]);
  const [hadError, setHadError] = useState(false);

  useEffect(() => {
    console.log(location.state)
    
    fetchSubscriberRecords();
  }, [location.state]);

  async function fetchSubscriberRecords() {
    try {
      const response = await fetch(`http://18.168.246.188:8080/subscriberRecords/read`);
      
      const data = await response.json();
      setSubscribers(data);
    } catch (error) {
      console.error('Error fetching subscriber records:', error);
      setHadError(true);
    }
  }
  
  function renderSubscriberRecords() {
    const filters = location.state.filter;
    let dataToRender = subscribers;
    if (filters && Object.keys(filters).length > 0) {
      // filter out citizens which don't match the filters
      if (filters.subscriberRecordId) dataToRender = dataToRender.filter;
      if (filters.phoneNumber) dataToRender = dataToRender.filter;
    if (filters.network) dataToRender = dataToRender.filter(data => data.network.toLowerCase().includes(filters.network.toLowerCase()));
    if (filters.citizenId) dataToRender = dataToRender.filter;

    }
    return dataToRender.map(data => (
      <tr>
        <td>{data.subscriberRecordId}</td>
        <td>{data.phoneNumber}</td>
        <td>{data.network}</td>
        <td>{data.citizenId}</td>
        <td>
          <button type="text">Overview</button>
        </td>
      </tr>
    ));
    };
    if (!hadError && subscribers.length === 0) {
      return <div>Loading data from API...</div>;
    }
    if (hadError) return <div>Something went wrong loading the data, please try again at a later time!</div>
  
  
  return (
    <div>
      <h2>Subscriber Records</h2>

        <table>
          <thead>
            <tr>
              <th>Subscriber Record ID</th>
              <th>Phone Number</th>
              <th>Network</th>
              <th>Citizen ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map(data => (
              <tr key={data.subscriberRecordId}>
                <td>{data.subscriberRecordId}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.network}</td>
                <td>{data.citizenId}</td>
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

export default SubscriberRecords;
