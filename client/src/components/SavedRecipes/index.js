import React from 'react';
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
                <h3>{username}'s {'favorite recipes'}</h3>
                <div>
                    {userData.savedRecipes.map((recipe) => {
                        return (
                        <div key={recipe._id}>
                        <Card className="pill mb-3">
                            <img className="recipe_image_small" src={recipe.image} alt={recipe.title}/>
                            <h3>Recipe:  {recipe.title}</h3>
                            <h3>Comment Title: {recipe.link}</h3>
                            <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipe(recipe._id)}>
                                Delete
                            </Button>
                        </Card>  
                        </div>
                    );
                })}                    
                </div>  
            </div>
        </div>     
    );
};

export default SavedRecipes;