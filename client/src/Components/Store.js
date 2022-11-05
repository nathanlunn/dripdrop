import React, {useEffect} from 'react';
import axios from 'axios';
import Product from './Product.js';
import './styles/Store.scss';

function Store({state, setState}) {
  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
    .then(res => {
      console.log(res.data);
      setState(prev => ({...prev, products: res.data}))
    })
    .catch(err => {
      console.error(err.message);
    })
  }, [])

  const productList = state.products.map(product => {
    return (
      <Product 
        product={product}
        state={state}
        setState={setState}
      />
    )
  });

  return (
    <div className='store'>
      <h1>Store</h1>
      <div className='store__products'>
        {productList}
      </div>
    </div>
  );
}

export default Store;