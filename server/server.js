/*
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
*/

const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const { MONGODB } = require("../config.js");

//queries, mutations, and subscriptions and their required fields
const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

//code that executes when query occurs
const resolvers = {
  Query: {
    sayHi: () => "Hello World!"
  }
}

//initialize server with typeDefs and resolvers to those typeDefs
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//connect to database and start server
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB Connected");
  return server.listen({ port: 5000});
})
.then(res => {
  console.log(`Server running at ${res.url}`)
});
