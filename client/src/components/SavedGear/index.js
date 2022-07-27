import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="card-container">
            <div className='card-header'>
                <h3 className="profileHeader">
                    {userData.savedGear.length
                    ? `Viewing ${username}'s saved gear'`
                    : 'You have no saved gear!'}
                </h3>
                {userData.savedGear.map((gear) => {
                    return (
                    <div key={gear._id}>
                        <Card className="card-body">
                            <img className="recipe_image_small" src={gear.image} alt={gear.title}/>
                            <h4>Gear:  {gear.title}</h4>
                            <h3><Link to={`/gear/${gear._id}`}>Go to the gear page</Link></h3>
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
    );
};

export default SavedGear;