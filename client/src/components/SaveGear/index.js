import React from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GEAR } from '../../utils/mutations';
import { Button } from 'react-bootstrap';


// create function to handle saving a recipe to our database
const SaveGear = ({ gearId })  => {
    const [saveGear] = useMutation(SAVE_GEAR);

    const handleClick = async () => {
        try {
            await saveGear({
                variables: { _id: gearId }
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

export default SaveGear;