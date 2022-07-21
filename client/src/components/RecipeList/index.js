import React from 'react';
import { Link } from  'react-router-dom';
import { Card } from 'react-bootstrap';


const RecipeList = ({ recipes, title, searchInput }) => {
    console.log(searchInput)



    return (
        <div>
            <Card className="card" border='dark'>
                {recipes &&  recipes.map(recipe => (
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
