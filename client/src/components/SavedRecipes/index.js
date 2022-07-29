import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { REMOVE_RECIPE} from '../../utils/mutations';


const SavedRecipes = ({ username }) => {

    const { data } = useQuery(QUERY_ME);
    const [removeRecipe, { error }] = useMutation(REMOVE_RECIPE);
    const userData = data?.me || {};

    const handleDeleteRecipe = async (event) => {
        
        try {
            const { data } = await removeRecipe({
                variables: {}
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className='card-header'>
                <h3>
                    {userData.savedRecipes.length
                    ? `Viewing ${username}'s saved recipes`
                    : 'You have no saved recipes!'}
                </h3>
            </div>
                <div className="card-body">
                    {userData.savedRecipes.map((recipe) => {
                        return (
                        <div key={recipe._id}>
                        <Card className="pill mb-3">
                            <img className="recipe_image_small" src={recipe.image} alt={recipe.title}/>
                            <h4>Recipe:  {recipe.title}</h4>  
                            <h3><Link to={`/recipe/${recipe._id}`}>Go to the recipe page</Link></h3>
                            {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipe(recipe._id)}>
                                Delete
                            </Button> */}
                        </Card>  
                        </div>
                    );
                })}                    
            </div>  
        </div>   
    );
};

export default SavedRecipes;