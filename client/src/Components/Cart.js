import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Cart(state, setState) {
  
  
  axios.post('http://localhost:8080/api/products/cart', {userID: state.user.id})
  .then(res => {

  })
  .catch(err => {
    console.log(err.message);
  })

  return (
    <div>Cart</div>
  )
}
