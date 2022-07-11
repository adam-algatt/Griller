import React from "react";


const Home = () => {
    return (
        <div className="container" >
            <h2>Welcome to Griller</h2>
            <h3>Your headquarters for all things related to the barbecue!</h3>
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

export default Home;