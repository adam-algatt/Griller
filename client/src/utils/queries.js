import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            savedRecipes {
                _id
                title
                image
                link
            }
            savedGear {
                _id
                title
                image
                link
            }
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

export const QUERY_GEAR = gql`
    query gear {
        gear {
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

export const QUERY_RECIPE_COMMENT_BY_USER = gql`
    query recipeCommentUser {
        recipeCommentUser {
            username
            commentTitle
            commentText
            recipeId {
                _id
                title
                category
                image
            }
        }
    }  
`;

export const QUERY_SAVED_RECIPES_BY_USER = gql`
    query savedRecipes {
        savedRecipes {
            username
            savedRecipes {
                _id
                title
                image
                link
            }
        }
    }
`;

export const QUERY_SAVED_GEAR_BY_USER = gql`
    query savedGear {
        savedGear {
            username
            savedGear {
                _id
                title
                image
                link
            }
        }
    }
`;

export const QUERY_SINGLE_GEAR= gql`
    query singleGear($_id: ID!) {
        singleGear(_id: $_id) {
            _id
            title
            image
            link
            gearComment {
                _id
                commentTitle
                commentText
                createdAt
                username
            }
        }
    }   
`;
export const QUERY_GEAR_COMMENT_BY_USER = gql`
    query gearCommentUser {
        gearCommentUser {
            username
            commentTitle
            commentText
            gearId {
                _id
                title
                category
                image
            }
        }
    }  
`;