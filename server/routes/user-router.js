const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const db = require('../db/db.js');
const bcrypt = require('bcrypt');

// POST request to '/api/users/ for all users
router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(`email: ${email}, password: ${password}`);

  db.query('SELECT * FROM users WHERE email = $1 AND password = $2;', [email, password])
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err.message);
  })
});

// POST request to '/api/users/register'
router.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query('INSERT INTO users (name, email, password)')
});

module.exports = router;