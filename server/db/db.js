const { Pool } = require('pg');

const pool = new Pool({
  user: "user", 
  database: "dripdrop_database",
  host: "localhost",
  port: 5432
});

module.exports = pool;