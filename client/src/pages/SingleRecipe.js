import React from "react";
import { useParams } from 'react-router-dom';

import SaveRecipe from '../components/SaveRecipe';
import RecipeComment from '../components/RecipeComment';
import RecipeCommentForm from '../components/RecipeCommentForm';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const SingleRecipe = props => {
    const { id: _id } = useParams();
    // const { data: userData} = useQuery(QUERY_ME);


    const { loading, data } = useQuery(QUERY_RECIPE, {
        variables: { _id: _id }
    });

    const recipe = data?.singleRecipe || {};

    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <div className="flex-row justify-space-between mb-3">
            <div className="col-12 mb-3 col-lg-8">
                <h2 className="singleRecipeTitle">{recipe.title}</h2>
                {Auth.loggedIn() && (
                    <SaveRecipe recipeId={recipe._id} />
                )} 
                    <a href={recipe.link} alt="link to recipe" target="_blank">
                        <p className="mb-0"> 
                            Click here to get the recipe!
                        </p>
                    </a>
                <img className="mb-0" src={recipe.image} alt={recipe.title}/>
            </div>
            <div>
                {Auth.loggedIn() && <RecipeCommentForm 
                    recipeId={recipe._id} 
                    // username={userData.me.username}
                />}
            </div>
            <div className="col-12 mb-3 col-lg-8">
                    <RecipeComment recipeComment={recipe.recipeComment} />
            </div>
        </div>    
    );
};

export default SingleRecipe;

