const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const resolvers = require("./graphql/resolvers");
const mongo = require("./db/mongo");
const User = require("./models/user");
const Carousel = require("./models/carousel");
const jwt = require("./helpers/jwt");
require("dotenv").config();

mongo();

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(async (req, res, next) => {
  try {
    const token = req.headers.authorization ? req.headers.authorization : null;
    if (token) {
      const user = await jwt.verify(token);
      req.activeUser = user;
      next();
    } else {
      req.activeUser = null;
      next();
    }
  } catch (error) {
    console.log(error);
    req.activeUser = null;
    next();
  }
});
const server = new ApolloServer({
  typeDefs: importSchema("./graphql/index.graphql"),
  resolvers,
  context: ({ req }) => ({
    User,
    Carousel,
    activeUser: req.activeUser,
  }),
});
server.applyMiddleware({ app, cors: false });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
