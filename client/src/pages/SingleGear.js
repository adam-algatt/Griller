import React from "react";
import { useParams } from 'react-router-dom';

import SaveGear from '../components/SaveGear';
// import GearComment from '../components/GearComment';
// import GearCommentForm from '../components/GearCommentForm';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_GEAR, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const SingleGear = props => {
    const { id: _id } = useParams();
    // const { data: userData} = useQuery(QUERY_ME);


    const { loading, data } = useQuery(QUERY_SINGLE_GEAR, {
        variables: { _id: _id }
    });

    const gear = data?.singleGear || {};

    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <div className="flex-row justify-space-between mb-3 card-body">
            <div className="col-12 mb-3 col-lg-8">
                <h3 className="singleRecipeTitle">{gear.title}</h3>
                {Auth.loggedIn() && (
                        <SaveGear gearId={gear._id} />
                    )} 
                    <div className="singleRecipeCard">
                        <a href={gear.link} alt="link to gear" target="_blank">
                            <p className="mb-0"> 
                                Click here to get the gear!
                            </p>
                        </a>
                        <img className="mb-0 recipe_image" src={gear.image} alt={gear.title}/>
                    </div>
                {/* <div>
                    {Auth.loggedIn() && <GearCommentForm 
                        gearId={gear._id} 
                        // username={userData.me.username}
                    />}
                </div>
                <div className="col-12 mb-3 col-lg-8">
                    <GearComment gearComment={gear.gearComment} />
                </div> */}
            </div>
        </div>    
    );
};

export default SingleGear;