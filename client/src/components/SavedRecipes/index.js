import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';


const SavedRecipes = ({ username }) => {

    const { data } = useQuery(QUERY_ME);
    const userData = data?.me || {};

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