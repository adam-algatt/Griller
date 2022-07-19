import React from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_RECIPE } from '../../utils/mutations';
import { Button } from 'react-bootstrap';


// create function to handle saving a recipe to our database
const SaveRecipe = ({ recipeId })  => {
    const [saveRecipe] = useMutation(SAVE_RECIPE);

    const handleClick = async () => {
        try {
            await saveRecipe({
                variables: { _id: recipeId }
            });
        } catch (e) {
            console.error(e)
        }
    };
    
// async () => { recipe }
//     try {
//         await saveRecipe({
//             variable: { _id: _id }
//             });
//         } catch (e) {
//             console.error(e);
//             console.log(_id);
//         }
//     }

    return (
        <div>
            <Button
                // disabled={savedRecipesIds?.some((savedRecipeId) => savedRecipeId === recipe._id)}
                className='btn-block btn-info'
                onClick={handleClick}>
                {console.log(recipeId)}
                {/* {savedRecipesIds?.some((savedRecipeId) => savedRecipeId === recipe._id) */}
                {/* ? 'This recipe has already been saved!'
                : 'Save this Recipe!'} */}
            </Button> 
    </div>
    );
};

export default SaveRecipe;