import React from 'react';
import './styles/Product.scss';
import cart from '../img/cart.png';
import { useNavigate } from 'react-router-dom';

export default function Product({product}) {
  const navigate = useNavigate();

  const addToCart = () => {

  }

  return (
    <div className='product'>
      <div className='product__info'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}.00</p>
        {product.stock <= 5 && <p>ONLY {product.stock} left in stock!</p>}
      </div>
      <div className='product__buttonDiv'>
        <button className='product__button product__button--buyNow' onClick={() => navigate('/purchase')}>BUY NOW</button>
        <img src={cart} className='product__button product__button--addToCart' onClick={addToCart}></img>
      </div>
    </div>
  )
}
