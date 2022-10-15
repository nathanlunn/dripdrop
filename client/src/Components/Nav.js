import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dripName from '../img/dripCharcoal.png';
import './styles/Nav.scss';
import cart from '../img/cart.png';


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
      {state.user.name && <h2>Welcome, {state.user.name}</h2>}
      <div className="nav__linkDiv">
        <Link className="nav__button" to="/">Home</Link>
        <Link className="nav__button" to="/store">Store</Link>
        {!state.user.name && <Link className="nav__button nav__button--login" to="/login">Login</Link>}
        {!state.user.name && <Link className="nav__button nav__button--register" to="/register">Register</Link>}
        {state.user.name && <button className="nav__button nav__button--logout" onClick={logout}>Logout</button>}
        {(!state.user.owner && !state.user.authorized) && <img className='nav__cart' onClick={() => navigate('/cart')} src={cart}></img>}
        {(state.user.owner || state.user.authorized) && <Link className="nav__button" to="/owner">Owners Dashboard</Link>}
      </div>
    </div>
  )
}
