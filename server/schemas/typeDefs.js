const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        savedRecipes: [Recipe]
        savedGear: [Gear]
    }

    type Recipe {
        _id: ID!
        category: String
        title: String
        link: String
        image: String
        recipeComment: [RecipeComment]
    }

    type Gear {
        _id: ID
        category: String
        title: String
        link: String
        image: String
        gearComment: [GearComment]
    }

    type RecipeComment {
        _id: ID!
        commentTitle: String
        commentText: String
        createdAt: String
        username: String
        recipeId: Recipe
    }

    type GearComment {
        _id: ID!
        commentTitle: String
        commentText: String
        createdAt: String
        username: String
        gearId: Gear
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        recipes: [Recipe]
        recipesByCategory(category: String!): [Recipe]
        singleRecipe(_id: ID!): Recipe
        recipeCommentUser: [RecipeComment]
        savedRecipes: User
        gear: [Gear]
        singleGear(_id: ID!): Gear
        savedGear: User
        gearCommentUser: [GearComment]
        gearByCategory(category: String!): [Gear]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addRecipe(category: String!, title: String!, image: String!, link: String!): Recipe
        addRecipeComment(commentTitle: String!, commentText: String!, recipeId: ID! ): RecipeComment
        saveRecipe(_id: ID!): User
        removeRecipe(_id: ID!): User
        removeRecipeComment(_id: ID!): RecipeComment
        addGear(category: String!, title: String!, image: String!, link: String!): Gear
        saveGear(_id: ID!): User
        addGearComment(commentTitle: String!, commentText: String!, gearId: ID! ): GearComment
        deleteRecipe(_id: ID!): Recipe
        updateRecipeComment(_id: ID!, recipeId: ID!): RecipeComment
    }
`;

module.exports = typeDefs;

