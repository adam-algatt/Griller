import React from 'react';
import { Link } from  'react-router-dom';
import { Button } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useQuery} from '@apollo/client';
import { QUERY_RECIPES_BY_CATEGORY } from '../../utils/queries';


const RecipeListByCategory = ({ title, searchInput }) => {

    
    //if (!thoughts.length) {
     //   return <h3>No Thoughts Yet</h3>;
    //}

    const currentRecipes = useQuery(QUERY_RECIPES_BY_CATEGORY, {
        variables: { category: searchInput},
    })

    // const currentRecipes = recipes.find((recipe) => recipe.category === {searchInput})
    console.log(searchInput)
    console.log(currentRecipes)

    return (
        <div>
            <h3>{title}</h3>
            {currentRecipes &&  currentRecipes.map( currentRecipe => (
                    <div key={currentRecipe._id} className="card mb-3">
                        <div className="card-body">
                            <Link to={`/recipe/${currentRecipe._id}`}>
                                <p>{currentRecipe.title}</p>
                                <img className="mb-0" src={currentRecipe.image} alt={currentRecipe.title}/> 
                            </Link>
                            <a href={currentRecipe.link}  target="_blank">
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
 

export default RecipeListByCategory;
