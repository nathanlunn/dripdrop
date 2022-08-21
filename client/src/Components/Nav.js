import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Nav({state, setState}) {
  const navigate = useNavigate();

  const logout = () => {
    axios.get('http://localhost:8080/api/users/logout')
    .then(res => {
      setState(prev => ({...prev, user: {} }));
      navigate('/login');
    })
    .catch(err => {
      console.error(err.message);
    })
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      {!state.user.name && <Link to="/login">Login</Link>}
      {!state.user.name && <Link to="/register">Register</Link>}
      {state.user.name && <button onClick={logout}>Logout</button>}
      {(state.user.owner || state.user.authorized) && <Link to="/owner">Owners Dashboard</Link>}
    </div>
  )
}
