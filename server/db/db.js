const { Pool } = require('pg');

// local database

// const pool = new Pool({
//   user: "user", 
//   database: "dripdrop_database",
//   host: "localhost",
//   port: 5432
// });

//heroku database

const pool = new Pool({
  host: "ec2-54-172-175-251.compute-1.amazonaws.com",
  user: 'leenkwghhnwzwb',
  password: '6dc042bfc5c642fd652fbedaa1738faf86254f3829f5e8be2fc6e3285fb3be22',
  database: 'dfgl6klfq6mkhc'
});

module.exports = pool;

// postgres://leenkwghhnwzwb:6dc042bfc5c642fd652fbedaa1738faf86254f3829f5e8be2fc6e3285fb3be22@ec2-54-172-175-251.compute-1.amazonaws.com:5432/dfgl6klfq6mkhc