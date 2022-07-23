import React from 'react';
import { Link } from  'react-router-dom';
import { Card } from 'react-bootstrap';


const GearList = ({ gear, title }) => {

    return (
        <div>
            <Card className="card" border='dark'>
                {gear &&  gear.map(gear => (
                    <div key={gear._id} className="card mb-3">
                        <div className="card-body">
                            <Link to={`/gear/${gear._id}`}>
                                <p>{gear.title}</p>
                                <img className="recipe_image" src={gear.image} alt={gear.title}/> 
                            </Link>
                                <a href={gear.link}  target="_blank">
                                <p className="mb-0"> 
                                    Click here to get the gear!
                                </p>
                            </a>
                        </div>   
                    </div>
                    ))
                }   
            </Card>
        </div>
    );
};

 

export default GearList;
