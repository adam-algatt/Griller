const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedRecipes: [Recipe]
    }

    type Recipe {
        _id: ID!
        category: String
        title: String
        link: String
        image: String
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
        recipes: [Recipe]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postTitle: String!): Post
        saveRecipe(category: String!, title: String!, link: String!, image: String!, ): Recipe
    }
`;

module.exports = typeDefs;

