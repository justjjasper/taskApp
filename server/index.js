const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { getTasks, addTask, updateTask } = require('./database/models');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors());

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`

  type Task {
    task: String!
    completed: Boolean
  }

  type Query {
    getTasks: [Task]
  }

  type Mutation {
    addTask(task: String!): Task!
    updateTask(task: String!, completed: Boolean!): Task!
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  getTasks,
  addTask,
  updateTask
};

// console.log('add a task', addTask({input: {task: 'Run'}}))
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
// console.log('ddid it work add', addTask({task: 'Run 2 marathons'}))
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
