import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './styles/CartItem.scss';
import cancel from '../img/cancel.png';

export default function CartItem({quantity, productID, state, setState}) {
  const [productQuantity, setProductQuantity] = useState(0);
  useEffect(() => {
    axios.post('https://drip-drop.herokuapp.com/api/products/cartquantity', {userID: state.user.id, productID})
    .then(res => {
      setProductQuantity(res.data[0].product_quantity);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])

  const product = state.products.find(product => product.id === productID);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const minusCart = () => {
    if (productQuantity === 1) {
      setConfirmDelete(true);
      return;
    }
    axios.post('https://drip-drop.herokuapp.com/api/products/addcart', {productID, userID: state.user.id, cartAmount: -1})
    setProductQuantity(productQuantity - 1);
  }

  const plusCart = () => {
    axios.post('https://drip-drop.herokuapp.com/api/products/addcart', {productID, userID: state.user.id, cartAmount: 1})
    setProductQuantity(productQuantity + 1);
  }

  const deleteCartItem = () => {
    axios.post('https://drip-drop.herokuapp.com/api/products/deletecartitem', {userID: state.user.id, productID})
  }

  return (
    <div className='cartItem'>
      {confirmDelete && (
        <div className='cartItem__confirmDeleteContainer'>
          <h3>Are You Sure You Want to Delete This Item From Your Cart</h3>
          <button
            className='cartItem__button cartItem__button--yesToDelete'
            onClick={deleteCartItem}
          >YES</button>
          <button
            className='cartItem__button cartItem__button--noToDelete'
            onClick={() => setConfirmDelete(false)}
          >NO</button>
        </div>
      )}
      <h3>{product.name}</h3>
      <div className='cartItem__quantityContainer'>
        <button
          className='cartItem__button cartItem__button--minus'
          onClick={minusCart}
        >-</button>
        <div>{productQuantity}</div>
        <button
          className='cartItem__button cartItem__button--plus'
          onClick={plusCart}
        >+</button>
        <img className='cartItem__button cartItem__button--delete' src={cancel} onClick={() => setConfirmDelete(true)}></img>
      </div>
    </div>
  )
}
