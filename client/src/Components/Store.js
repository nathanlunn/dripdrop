import React, {useEffect} from 'react';
import axios from 'axios';

function Store() {
  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err.message);
    })
  }, [])

  return (
    <div>
      <h1>Store</h1>

    </div>
  );
}

export default Store;