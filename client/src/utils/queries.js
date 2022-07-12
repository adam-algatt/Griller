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

export const QUERY_BY_CATEGORY = gql`
    query recipeCategory($category: String) {
        recipeCategory(category: $category) {
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