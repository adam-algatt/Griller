const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Post {
        _id: ID
        postTitle: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        posts: [Post]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postTitle: String!): Post
    }
`;

module.exports = typeDefs;

