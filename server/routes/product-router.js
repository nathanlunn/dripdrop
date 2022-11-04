const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

// GET request to '/api/products' to get list of products

router.get('/', (req, res) => {
  db.query('SELECT * FROM products;')
  .then(data => {
    const products = data.rows;
    res.send(products);
  })
  .catch(err => {
    console.error(err.message);
  })
})

router.post('/addcart', (req, res) => {
  const cartAmount = req.body.cartAmount;
  console.log(cartAmount);
  res.send('nice');
})

module.exports = router;