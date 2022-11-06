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
  const cartAmount = parseInt(req.body.cartAmount);
  const productID = parseInt(req.body.productID);
  const userID = parseInt(req.body.userID);
  const status = "cart";
  // console.log(`userID: ${userID}, productID: ${productID}, cartAmount: ${cartAmount} `);
  if (!userID) {
    res.send('no user');
  }
  db.query('SELECT * FROM user_product_relation WHERE user_id = $1 AND product_id = $2', [userID, productID])
  .then(data => {
    console.log(data.rows);
    if (data.rows.length) {
      db.query('UPDATE user_product_relation SET status = $4, product_quantity = product_quantity + $1 WHERE user_id = $2 AND product_id = $3 RETURNING *;', [cartAmount, userID, productID, status])
      .then(data => {
        data.rows.push('update');
        res.send(data.rows);
        return;
      })
      .catch(err => {
        console.error(err.message);
      })
    } else {
      db.query('INSERT INTO user_product_relation (user_id, product_id, status, product_quantity) VALUES ($1, $2, $3, $4) RETURNING *;', [userID, productID, status, cartAmount])
      .then(data => {
        data.rows.push('new');
        res.send(data.rows);
        return;
      })
      .catch(err => {
        console.error(err.message);
      })
    }
  })
  .catch(err => {
    console.error(err.message);
  })
})

module.exports = router;