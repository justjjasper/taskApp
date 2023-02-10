// These functions will retrieve data from the db

// Import the pgPool
const pool = require('./db.js');

const getTasks = async () => {
  const results = await pool.query(`SELECT * FROM tasks`);

  return results.rows;
  pool.end();
};

const addTask = async ( {task} ) => {
  console.log('what is input', task)
  const results = await pool.query(
    `INSERT INTO tasks (task, completed)
    VALUES ('${task}', false)`
  )

  return {task}
};

const updateTask = async ( {task, completed} ) => {
  console.log('what is the updated task', task)
  const results = await pool.query(
    `UPDATE tasks
    SET completed = ${!completed}
    WHERE task = '${task}'`
  )
  return {task: task, completed: completed}
};

const deleteTask = async ( {task} ) => {
  console.log('what is the task delete', task)
  const results = await pool.query(
    `DELETE FROM tasks
    WHERE task = '${task}'`
  )

  return {task}
}

module.exports.getTasks = getTasks;
module.exports.addTask = addTask
module.exports.updateTask = updateTask
module.exports.deleteTask = deleteTask