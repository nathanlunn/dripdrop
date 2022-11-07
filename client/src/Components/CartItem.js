import React, {useEffect, useState} from 'react';


export default function CartItem({quantity, productID, state, setState}) {
  const product = state.products.find(product => product.id === productID);
  console.log(product);

  return (
    <div>
      <h5></h5>
    </div>
  )
}
