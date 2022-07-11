import React from "react";

const singleRecipe = () => {
    return (
        <div className="container" >
            <h2>Welcome to Griller</h2>
            <h2>Your headquarters for all things related to the barbecue!</h2>
            <div className='buttons'>
                <button className="recipes">
                    <a href="recipes">
                    Recipes</a></button>
                <button className="gear">Gear</button>
                <button className="restaurants">Restaurants</button>
            </div>
        </div>
    );
};

export default singleRecipe;

