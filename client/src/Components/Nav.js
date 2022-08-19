import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({state}) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}
