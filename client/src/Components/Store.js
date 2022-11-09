import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Product from './Product.js';
import './styles/Store.scss';

function Store({state, setState}) {
  const [confirmMessage, setConfirmMessage] = useState('');

  const productList = state.products.map(product => {
    return (
      <Product
        key={product.id}
        product={product}
        state={state}
        setState={setState}
        setConfirmMessage={setConfirmMessage}
      />
    )
  });

  return (
    <div className='store'>
      {confirmMessage && (
        <div className='store__confirmMessage'>
          <h3>{confirmMessage}</h3>
        </div>
      )}
      <h1>Store</h1>
      <div className='store__products'>
        {productList}
      </div>
    </div>
  );
}

export default Store;