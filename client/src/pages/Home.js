import React from "react";


const Home = () => {
    return (
        <div className="container" >
            <h1>Welcome to Griller</h1>
            <h2>Your headquarters for all things related to the barbecue!</h2>
            <div className='buttons'>
                <button className="recipes">Recipes</button>
                <button className="gear">Gear</button>
                <button className="restaurants">Restaurants</button>
            </div>
        </div>
    );
};

export default Home;