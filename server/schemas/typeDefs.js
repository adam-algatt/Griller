const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        savedRecipe: [Recipe]
    }

    type Recipe {
        _id: ID!
        category: String
        title: String
        link: String
        image: String
        recipeComment: [RecipeComment]
    }

    type RecipeComment {
        _id: ID!
        commentTitle: String
        commentText: String
        createdAt: String
        username: String
        recipeId: Recipe
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        recipes: [Recipe]
        recipeCategory(category: String!): [Recipe]
        singleRecipe(_id: ID!): Recipe
        recipeCommentUser(username: String!): [RecipeComment]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addRecipe(category: String!, title: String!, image: String!, link: String!): Recipe
        addRecipeComment(commentTitle: String!, commentText: String!, username: String!, recipeId: ID! ): RecipeComment
        saveRecipe(recipeId: ID!): User
    }
`;

module.exports = typeDefs;

