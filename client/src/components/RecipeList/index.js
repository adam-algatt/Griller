import React from 'react';
import { Link } from  'react-router-dom';
import { Button } from 'react-bootstrap';
import Auth from '../../utils/auth';


const RecipeList = ({ recipes, title }) => {

    
    //if (!thoughts.length) {
     //   return <h3>No Thoughts Yet</h3>;
    //}

    // const currentRecipes = recipes.find((recipe) => recipe.category === {searchInput})

    return (
        <div>
            <h3>{title}</h3>
            {recipes && recipes.map( recipe => (
                    <div key={recipe._id} className="card mb-3">
                        <div className="card-body">
                            <Link to={`/recipe/${recipe._id}`}>
                                <p>{recipe.title}</p>
                                <img className="mb-0" src={recipe.image} alt={recipe.title}/> 
                            </Link>
                            <a href={recipe.link}  target="_blank">
                                <p className="mb-0"> 
                                    Click here to get the recipe!
                                </p>
                            </a>
                        </div>   
                        {Auth.loggedIn() && (
                    <Button
                        className='btn-block btn-info'
                        // onClick={() => handleSaveRecipe()}
                        >Save
                    </Button> )}
                </div>
            ))
            }        
        </div>
  
    );
};

export default RecipeList;
