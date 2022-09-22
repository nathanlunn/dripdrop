import React, {useState} from 'react';
import './styles/Product.scss';
import cart from '../img/cart.png';
import { useNavigate } from 'react-router-dom';
import check from '../img/check.png';
import cancel from '../img/cancel.png';

export default function Product({product}) {
  const navigate = useNavigate();
  const [addingToCart, setAddingToCart] = useState(false);
  const [cartAmount, setCartAmount] = useState(1);

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
        {addingToCart && (
          <div className='product__addingToCart'>
            <button className='product__lessAmount' onClick={() => {
                if (cartAmount > 0) {                  
                  setCartAmount(cartAmount - 1)
                }
              }}>-</button>
            <div className='product__cartAmount'>{cartAmount}</div>
            <button className='product__moreAmount' onClick={() => {setCartAmount(cartAmount + 1)}}>+</button>
            <img className='product__confirmCartAdd' src={check}></img>
            <img className='product__cancelCartAdd' src={cancel} onClick={() => setAddingToCart(false)}></img>
          </div>
        )}
        <img src={cart} className='product__button product__button--addToCart' onClick={() => setAddingToCart(true)}></img>
      </div>
    </div>
  )
}
