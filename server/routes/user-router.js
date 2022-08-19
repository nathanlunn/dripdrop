const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

// POST request for all users
router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query('SELECT * FROM users WHERE email = $1 AND password = $2;', [email, password])
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err.message);
  })
});

module.exports = router;