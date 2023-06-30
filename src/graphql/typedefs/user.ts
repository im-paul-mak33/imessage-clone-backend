import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type User {
    id: String
    username: String
  }

  # In query operations we only read the data
  type Query {
    searchUsers(username: String): [User]
  }

  # In mutation operations we do the write operations on the data
  type Mutation {
    createUsername(username: String): CreateUsernameResponse
  }

  # Made the below type CreateUsernameResponse for handing mutation request above to know the result of the mutation operation after the mutation operation has been completed
  type CreateUsernameResponse {
    success: Boolean
    error: String
  }
`;

export default typeDefs;
