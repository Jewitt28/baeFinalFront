import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InputForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(firstName, lastName, homeAddress, dateOfBirth, placeOfBirth);
  };

  return (
  
   
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Group>
        
        <button type="submit" className="btn btn-dark">Submit</button>
      </Form>
  
  
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     value={firstName}
    //     onChange={(event) => setFirstName(event.target.value)}
    //     placeholder="First Name"
    //   />
    //   <input
    //     type="text"
    //     value={lastName}
    //     onChange={(event) => setLastName(event.target.value)}
    //     placeholder="Last Name"
    //   />
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default InputForm;
