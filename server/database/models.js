// These functions will retrieve data from the db

// Import the pgPool
const pool = require('./db.js');

const getTasks = async () => {
  const results = await pool.query(`SELECT * FROM tasks`);
  console.log('yes results', results.rows)
  return results.rows;
  pool.end();
}

module.exports.getTasks = getTasks;