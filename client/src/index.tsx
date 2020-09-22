import React from "react";
import ReactDOM from "react-dom";
import App from "components/app";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import "./index.scss";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL,
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
