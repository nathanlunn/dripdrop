import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dripName from '../img/dripCharcoal.png';
import './styles/Nav.scss';

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
    <div className="nav">
      <img className="nav__logo" src={dripName}/>
      <div className="nav__linkDiv">
        <Link className="nav__button" to="/">Home</Link>
        <Link className="nav__button" to="/store">Store</Link>
        {!state.user.name && <Link className="nav__button" to="/login">Login</Link>}
        {!state.user.name && <Link className="nav__button" to="/register">Register</Link>}
        {state.user.name && <button className="nav__button" onClick={logout}>Logout</button>}
        {(state.user.owner || state.user.authorized) && <Link className="nav__button" to="/owner">Owners Dashboard</Link>}
      </div>
    </div>
  )
}
