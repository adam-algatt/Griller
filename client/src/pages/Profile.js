import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_SAVED_RECIPES_BY_USER, QUERY_SAVED_GEAR_BY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import UserRecipeComment from '../components/UserRecipeComment';
import SavedRecipes from '../components/SavedRecipes';
import SavedGear from '../components/SavedGear';

const Profile = (props) => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });
    const user = data?.me || data?.user || {};

    const { recipeData } = useQuery(QUERY_SAVED_RECIPES_BY_USER);
    const savedRecipes = recipeData?.savedRecipes || [];

    const { gearData } = useQuery(QUERY_SAVED_GEAR_BY_USER);
    const savedGear = gearData?.savedGear || [];

    // navigate to personal profile page if username is the logged-in user
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/profile" />
    }

    if (loading) {
        return <div>Loading.....</div>
    }
    
    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to view this page.  Please login or sign up!
            </h4>
        );
    }

    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {`${user.username}'s`} profile.
                </h2>
                    {loading ? (
                        <div>Loading</div>
                    ) : (
                    <div>
                        <UserRecipeComment 
                            username={user.username}
                        /> 
                        <SavedRecipes
                            username={user.username}
                        />
                        <SavedGear
                            username={user.username}
                        />
                    </div>
                )}
            </div>  
        </div>
    )
};

export default Profile;