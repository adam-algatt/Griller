import React from "react";
import { useParams } from 'react-router-dom';

import RecipeComment from '../components/RecipeComment';
import RecipeCommentForm from '../components/RecipeCommentForm';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const SingleRecipe = props => {
    const { id: recipeId } = useParams();
    // const { data: userData} = useQuery(QUERY_ME);


    console.log(recipeId)


    const { loading, data } = useQuery(QUERY_RECIPE, {
        variables: {id: recipeId }
    });
    const recipe = data?.singleRecipe || {};
    
    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <div className="flex-row justify-space-between mb-3">
            <div className="col-12 mb-3 col-lg-8">
                <h2>{recipe.title}</h2>
                <img className="mb-0" src={recipe.image} alt={recipe.title}/>
            </div>
            <div>
            {Auth.loggedIn() && <RecipeCommentForm 
                recipeId={recipe._id} 
                // username={userData.me.username}
                />}
            </div>
                <div className="col-12 mb-3 col-lg-8">
                    <RecipeComment recipeComments={recipe.recipeComment} />
                </div>
        </div>    
    );
};

export default SingleRecipe;

