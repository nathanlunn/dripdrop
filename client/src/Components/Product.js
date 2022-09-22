import React from 'react';
import './styles/Product.scss';

export default function Product({product}) {
  return (
    <div className='product'>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}.00</p>
      {product.stock <= 5 && <p>ONLY {product.stock} left in stock!</p>}
      
    </div>
  )
}