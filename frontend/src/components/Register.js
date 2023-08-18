// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    accessCode: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error registering company:', error);
    }
  };

  return (
    <div className="register">
      <h2>Register Company</h2>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;