import React, { useState } from 'react';
import { Link } from  'react-router-dom';
import { Button, Card } from 'react-bootstrap';
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
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    // create state for holding our search field data
    // const [searchInput, setSearchInput] = useState('');

    // create state to hold saved recipeId values
    const [savedRecipesIds, setSavedRecipesIds] = useState(getSavedRecipeIds());

    const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);

    // create function to handle saving a recipe to our database
    const handleSaveRecipe = async (recipeId) => {
    // find the recipe in `searchedRecipes` state by the matching id
        const recipeToSave = searchedRecipes.find((recipe) => recipe._id === recipeId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
        return false;
        }

        try {
            const response = await saveRecipe(recipeToSave, token);
            const { data } = await saveRecipeIds({
                variables: { newRecipe: { ...recipeToSave } },
            });

        if (!response.ok) {
            throw new Error('something went wrong!');
        }

        // if recipe successfully saves to user's account, save recipe id to state
        setSavedRecipesIds([...savedRecipesIds, recipeToSave.recipeId]);
        } catch (err) {
      console.error(err);
    }
  };

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
                        {Auth.loggedIn() && (
                        <Button
                        disabled={savedRecipesIds?.some((savedRecipeId) => savedRecipeId === recipes._id)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveRecipe(recipes._id)}>
                          {console.log(recipes._id)}
                        {savedRecipesIds?.some((savedRecipeId) => savedRecipeId === recipes._id)
                          ? 'This recipe has already been saved!'
                          : 'Save this Recipe!'}
                        </Button> )}  
                    </div>
                    ))
                }   
            </Card>
        </div>
    );
};

 

export default RecipeList;
