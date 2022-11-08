import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './styles/CartItem.scss';

export default function CartItem({quantity, productID, state, setState}) {
  const product = state.products.find(product => product.id === productID);

  const minusCart = () => {
    axios.post('http://localhost:8080/api/products/addcart', {productID, userID: state.user.id, cartAmount: -1})
  }

  return (
    <div className='cartItem'>
      <h3>{product.name}</h3>
      <div className='cartItem__quantityContainer'>
        <button
          className='cartItem__button cartItem__button--minus'
          onClick={minusCart}
        >-</button>
      </div>
    </div>
  )
}
