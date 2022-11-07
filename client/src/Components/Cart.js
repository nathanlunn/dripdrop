import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CartItem from './CartItem.js';

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

  console.log(state.cartLogs);

  const cartList = state.cartLogs.map(cartItem => {
    return (
      <CartItem 
        quantity={cartItem.product_quantity}
        productID={cartItem.product_id}
        state={state}
        setState={setState}
      />
    )
  })

  return (
    <div>
      <h1>Cart</h1>
      {cartList}
    </div>
  )
}
