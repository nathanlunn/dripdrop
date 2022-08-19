import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(setState) {
  const navigate = useNavigate();

  return(
    <div>
      <h2>Login</h2>

      <h4>No Account? Sign Up</h4>
      <button onClick={() => navigate('/register')}>Sign Up</button>
    </div>
  )
}