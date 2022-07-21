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
        <div className="save_btn">
            <Button
                className='btn col-12 col-md-3'
                onClick={handleClick}>
                    Save
            </Button>
    </div>
    );
};

export default SaveRecipe;