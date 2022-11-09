import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CartItem from './CartItem.js';
import './styles/Cart.scss';

export default function Cart({state, setState}) {
  useEffect(() => {
    axios.post('http://localhost:8080/api/products/cart', {userID: state.user.id})
    .then(res => {
      setState(prev => ({...prev, cartLogs: res.data}))
    })
    .catch(err => {
      console.log(err.message);
    })
  }, []);

  const cartList = state.cartLogs.map(cartItem => {
    return (
      <CartItem 
        key={cartItem.id}
        productID={cartItem.product_id}
        state={state}
        setState={setState}
      />
    )
  })

  return (
    <>
      <h1>Your Cart</h1>
      <div className='cart'>
        {cartList}
      </div>
    </>
  )
}
