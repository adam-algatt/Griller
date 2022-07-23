import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container" >
            <h2>Welcome to Griller</h2>
            <h3>Your headquarters for all things related to the barbecue!</h3>
            <div className='buttons'>
                <button className="recipes">
                    <Link to="/recipes" className="link">Recipes</Link>
                </button>
                <button className="gear">
                    <Link to="/gear" className="link">Gear</Link>
                </button>
                <button className="restaurants">Restaurants</button>
            </div>
        </div>
    );
};

export default Home;