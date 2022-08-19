import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav({state, setState}) {
  const navigate = useNavigate();

  const logout = () => {
    setState(prev => ({...prev, user: {} }));
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
