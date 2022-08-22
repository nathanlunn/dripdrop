import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Drip.png';
import './styles/Home.scss';
import dripLogo from '../img/dripImage.png';

export default function Home() {
  return (
    <div className="home">
      <div className="home__decoratioin home__decoration--right"></div>
      <div className="home__decoratioin home__decoration--left"></div>
      <div className="home__header">
        <div className="home__headerLeft">
          <h1 className="home__title">Buy Your Clothes Here</h1>
          <Link className="home__storeLink" to="/store">Store</Link>
        </div>
        <img className="home__logo" src={dripLogo}/>
      </div>
    </div>
  )
}
