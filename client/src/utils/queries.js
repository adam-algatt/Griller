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