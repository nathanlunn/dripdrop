import React, {useState} from 'react';
import axios from 'axios';
import './styles/Product.scss';
import cart from '../img/cart.png';
import { useNavigate } from 'react-router-dom';
import check from '../img/check.png';
import cancel from '../img/cancel.png';

export default function Product({product, state}) {
  const navigate = useNavigate();
  const [addingToCart, setAddingToCart] = useState(false);
  const [cartAmount, setCartAmount] = useState(1);

  const addToCart = () => {
    if (cartAmount < 1) {
      setAddingToCart(false);
      return;
    }
    axios.post('http://localhost:8080/api/products/cartAddition', {userID: state.user.id, productID: product.id, cartAmount})
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err.message);
    })
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
            <div className='product__additionContainer'>
              <button className='product__amountChange' onClick={() => {
                  if (cartAmount > 0) {                  
                    setCartAmount(cartAmount - 1)
                  }
                }}>-</button>
              <div className='product__cartAmount'>{cartAmount}</div>
              <button className='product__amountChange' onClick={() => {setCartAmount(cartAmount + 1)}}>+</button>
            </div>
            <div className='product__confirmContainer'>
              <img className='product__confirmCartAdd' src={check} onClick={addToCart}></img>
              <img className='product__cancelCartAdd' src={cancel} onClick={() => {
                setAddingToCart(false);
                setCartAmount(1);
              }}></img>
            </div>
          </div>
        )}
        <img src={cart} className='product__button product__button--addToCart' onClick={() => {
          setAddingToCart(true);
          setCartAmount(1);
          }}></img>
      </div>
    </div>
  )
}
