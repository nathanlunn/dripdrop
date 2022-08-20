const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const db = require('../db/db.js');
const bcrypt = require('bcrypt');

// POST request to '/api/users/ for all users
router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    db.query('SELECT * FROM users WHERE email = $1;', [email])
  .then(data => {
    if (data.rows.length < 1) {
      return res.send('That Email Does Not Belong to a User');
    }
    const match = await bcrypt.compare(password, data.rows[0].password)
    console.log(match);
    //   return res.send(data);
     
    //  res.send('This Password Does Not Match this Email');
  })
  .catch(err => {
    console.error(err.message);
  })
  } catch {
    res.status(500).send();
  }
});

// POST request to '/api/users/register'
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const name = req.body.name;
    const email = req.body.email;
    
    db.query('SELECT * FROM users WHERE email = $1', [email])
    .then(data => {
      if (data.rows.length > 0) {
        return res.send('That Email is Already In Use');        
      }      
      db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;', [name, email, hashedPassword])
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.error(err.message);
      })
    })
  } catch {
    res.status(500).send();
  }
});

module.exports = router;