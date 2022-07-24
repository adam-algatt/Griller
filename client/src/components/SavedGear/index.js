import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
// import { REMOVE_RECIPE} from '../../utils/mutations';


const SavedGear = ({ username }) => {

    const { data } = useQuery(QUERY_ME);
    // const [removeRecipe, { error }] = useMutation(REMOVE_RECIPE);
    const userData = data?.me || {};

    // const handleDeleteGear = async (event) => {
        
    //     try {
    //         const { data } = await removeGear({
    //             variables: {}
    //         });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <div>
            <div className='card-header'>
                <h3>{username}'s {'saved gear'}</h3>
                <div>
                    {userData.savedGear.map((gear) => {
                        return (
                        <div key={gear._id}>
                        <Card className="pill mb-3">
                            <img className="recipe_image_small" src={gear.image} alt={gear.title}/>
                            <h3>Gear:  {gear.title}</h3>
                            {/* <h3>Comment Title: {gear.link}</h3> */}
                            {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteGear(gear._id)}>
                                Delete
                            </Button> */}
                        </Card>  
                        </div>
                    );
                })}                    
                </div>  
            </div>
        </div>     
    );
};

export default SavedGear;