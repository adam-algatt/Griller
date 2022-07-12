import { gql } from '@apollo/client';

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

export const QUERY_RECIPE_CATEGORY = gql`
    query recipes($category: String) {
        recipes(category: $category) {
            title
            image
            link
            category
        }
    }
`;

export const QUERY_RECIPE = gql`
    query singleRecipe($id: ID!) {
        singleRecipe(_id: $id) {
            _id
            title
            image
            link
        }
    }   
`;