// These functions will retrieve data from the db

// Import the pgPool
const pool = require('./db.js');

const getTasks = async () => {
  const results = await pool.query(`SELECT * FROM tasks`);

  return results.rows;
  pool.end();
}

const addTask = async ( {task} ) => {
  console.log('what is input', task)
  const results = await pool.query(
    `INSERT INTO tasks (task, completed)
    VALUES ('${task}', false)`
  )

  return {task, completed: false}
}

module.exports.getTasks = getTasks;
module.exports.addTask = addTask