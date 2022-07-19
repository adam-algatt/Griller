import React, { useState } from 'react';
import { Link } from  'react-router-dom';
import { Card } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { saveRecipeIds, getSavedRecipeIds } from '../../utils/localStorage';
import { SAVE_RECIPE } from '../../utils/mutations';

const RecipeList = ({ recipes, title }) => {
    // console.log(searchInput)
    //if (!thoughts.length) {
     //   return <h3>No Thoughts Yet</h3>;
    //}

      
    // create state for holding returned google api data
    // const [searchedRecipes, setSearchedRecipes] = useState([]);
    // create state for holding our search field data
    // const [searchInput, setSearchInput] = useState('');

    // create state to hold saved recipeId values
    // const [savedRecipesIds, setSavedRecipesIds] = useState(getSavedRecipeIds());

    // const [saveRecipe, { error }] = useMutation(SAVE_RECIPE, {
    //     variables: { recipeId },
    // });



    return (
        <div>
            <Card className="card" border='dark'>
                <h3>{title}</h3>
                {recipes &&  recipes.map( recipe => (
                    <div key={recipe._id} className="card mb-3">
                        <div className="card-body">
                            <Link to={`/recipe/${recipe._id}`}>
                                <p>{recipe.title}</p>
                                <img className="recipe_image" src={recipe.image} alt={recipe.title}/> 
                            </Link>
                                <a href={recipe.link}  target="_blank">
                                <p className="mb-0"> 
                                    Click here to get the recipe!
                                </p>
                            </a>
                        </div>   
                    </div>
                    ))
                }   
            </Card>
        </div>
    );
};

 

export default RecipeList;
