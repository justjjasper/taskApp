require('dotenv');
const { Pool, Client } = require('pg');

// Provide connection string
var pool = new Pool({
  user: 'jasperbucad',
  password: process.env.PG_PASSWORD,
  database: 'task',
  host: process.env.PG_HOST,
  port: 5432
})

// Connect database
pool.connect();

module.exports = pool;