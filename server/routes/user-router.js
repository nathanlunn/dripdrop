const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const db = require('../db/db.js');
const bcrypt = require('bcrypt');

// GET request to '/api/users/' to check if there is a session
router.get('/', (req, res) => {
  if(req.session.user) {
    return res.send({loggedIn: true, user: req.session.user});
  }
  res.send({loggedIn: false});
})

// POST request to '/api/users/' for all users
router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query('SELECT * FROM users WHERE email = $1;', [email], async (err, result) => {
    if (err) {
      throw err;
    }
    if (result.rows.length < 1) {
      return res.send('That Email Does Not Belong to a User');
    }
    const match = await bcrypt.compare(password, result.rows[0].password)
    if (match) {
      req.session.user = result.rows[0];
      console.log(req.session.user);
      return res.send(result);
    }
    res.send('This Password Does Not Match this Email');
  })
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