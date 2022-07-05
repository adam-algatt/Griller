const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedRecipes: [Recipe]
    }

    type Recipe {
        recipeId: ID!
        category: String
        title: String
        link: String
        image: String
    }

    input SavedRecipe {
        recipeId: String
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
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postTitle: String!): Post
        saveRecipe(recipeId: SavedRecipe!): User
    }
`;

module.exports = typeDefs;

