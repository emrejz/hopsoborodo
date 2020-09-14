const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const resolvers = require("./graphql/resolvers");
const mongo = require("./db/mongo");
const User = require("./models/user");

mongo();
const app = express();
const server = new ApolloServer({
  typeDefs: importSchema("./graphql/index.graphql"),
  resolvers,
  context: () => ({
    User,
  }),
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
