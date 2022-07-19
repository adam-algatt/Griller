import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            savedRecipe {
                _id
            }
        }
    }    
`;

export const QUERY_RECIPES = gql`
    query recipes {
        recipes {
            _id
            category
            title
            link
            image
        }
    }
`;

export const QUERY_BY_CATEGORY = gql`
    query recipeCategory($category: String!) {
        recipeCategory(category: $category) {
            title
            image
            link
            category
        }
    }
`;

export const QUERY_RECIPE = gql`
    query singleRecipe($_id: ID!) {
        singleRecipe(_id: $_id) {
            _id
            title
            image
            link
            recipeComment {
                _id
                commentTitle
                commentText
                createdAt
                username
            }
        }
    }   
`;