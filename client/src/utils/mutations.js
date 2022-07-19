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
    mutation addRecipeComment($commentTitle: String!, $commentText: String!, $recipeId: ID!, $username: String!) {
        addRecipeComment(commentTitle: $commentTitle, commentText: $commentText, recipeId: $recipeId, username: $username) {
            commentTitle
            commentText
            username
            recipeId {
                _id
            }
        }
    }  
`
export const SAVE_RECIPE = gql`
    mutation saveRecipe($_id: ID!) {
        saveRecipe(_id: $_id) {
            username
            email
            savedRecipes {
                _id
                title
            }
        }
    }
`;