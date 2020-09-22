import { gql } from "@apollo/client";

export const createUser = gql`
  mutation($username: String!, $password: String!) {
    createUser(data: { username: $username, password: $password }) {
      token
    }
  }
`;
export const loginUser = gql`
  query($username: String!, $password: String!) {
    loginUser(data: { username: $username, password: $password }) {
      token
    }
  }
`;
