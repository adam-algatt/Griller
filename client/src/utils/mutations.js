import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }    
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_RECIPE_COMMENT = gql`
    mutation addRecipeComment($commentTitle: String!, $commentText: String!, $recipeId: ID!) {
        addRecipeComment(commentTitle: $commentTitle, commentText: $commentText, recipeId: $recipeId) {
            commentTitle
            commentText
            username
            recipeId {
               _id
            }
        }
    }  
`;

export const SAVE_RECIPE = gql`
    mutation saveRecipe($_id: ID!) {
        saveRecipe(_id: $_id) {
            _id
            username
            email
            savedRecipes {
                _id
                title
            }
        }
    }
`;

export const SAVE_GEAR = gql`
    mutation saveGear($_id: ID!) {
        saveGear(_id: $_id) {
            _id
            username
            email
            savedGear {
                _id
                title
            }
        }
    }
`;

export const ADD_GEAR_COMMENT = gql`
    mutation addGearComment($commentTitle: String!, $commentText: String!, $gearId: ID!) {
        addGearComment(commentTitle: $commentTitle, commentText: $commentText, gearId: $gearId) {
            commentTitle
            commentText
            username
            gearId {
               _id
            }
        }
    }  
`;

export const REMOVE_RECIPE = gql`
    mutation removeRecipe($_id: ID!) {
        removeRecipe(_id: $_id) {
            _id
            username
            email
            savedRecipes {
                _id
                title
                image
                link
            }
        }
    }
`;

export const REMOVE_RECIPE_COMMENT = gql`
    mutation removeRecipeComment($_id: ID!) {
        removeRecipeComment(_id: $_id) {
            _id
            commentTitle
            commentText
            recipeId {
                _id
                title
                image 
                link
            }
        }
    }
`;

export const REMOVE_GEAR_COMMENT = gql`
    mutation removeGearComment($_id: ID!) {
        removeGearComment(_id: $_id) {
            _id
        }
    }
`;