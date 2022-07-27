import React from 'react';
import { Link } from  'react-router-dom';
import { Card } from 'react-bootstrap';



const RecipeList = ({ recipes, title, searchInput }) => {
    console.log(searchInput)
    console.log(recipes)
    

    return (
        <div>
            <Card className="card" border='dark'>
                {recipes && recipes.recipesByCategory.map(recipes => (
                    <div key={recipes._id} className="card mb-3">
                        <div className="card-body">
                            <Link to={`/recipe/${recipes._id}`}>
                                <p>{recipes.title}</p>
                                <img className="recipe_image" src={recipes.image} alt={recipes.title}/> 
                            </Link>
                                <a href={recipes.link}  target="_blank">
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
