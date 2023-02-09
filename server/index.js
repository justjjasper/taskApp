const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { getTasks } = require('./database/models');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors());

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Task {
    task: String,
    completed: Boolean
  }

  type Query {
    getTasks: [Task]
  }

  schema {
    query: Query
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  getTasks
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
