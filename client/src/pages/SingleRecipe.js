import React from "react";
import { useParams } from 'react-router-dom';

import RecipeComment from '../components/RecipeComment';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE } from '../utils/queries';

const SingleRecipe = props => {
    const { id: recipeId } = useParams();
    const { loading, data } = useQuery(QUERY_RECIPE, {
        variables: {id: recipeId }
    });

    const recipe = data?.singleRecipe || {};
    
    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <div>
                <h2>{recipe.title}</h2>
                <img className="mb-0" src={recipe.image} alt={recipe.title}/>
                {console.log(data)}
            </div>
            <div>
                <RecipeComment recipeComments={recipe.recipeComment} />
            </div>

        </div>    
    );
};

export default SingleRecipe;

