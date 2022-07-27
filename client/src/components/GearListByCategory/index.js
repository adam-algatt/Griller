import React from 'react';
import { Link } from  'react-router-dom';
import { Button } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useQuery} from '@apollo/client';
import { QUERY_GEAR_BY_CATEGORY } from '../../utils/queries';


const GearListByCategory = ({ title, searchInput }) => {

    
    //if (!thoughts.length) {
     //   return <h3>No Thoughts Yet</h3>;
    //}

    const currentGear = useQuery(QUERY_GEAR_BY_CATEGORY, {
        variables: { category: searchInput},
    })

    // const currentGear = gear.find((gear) => gear.category === {searchInput})
    console.log(searchInput)
    console.log(currentGear)

    return (
        <div>
            <h3>{title}</h3>
            {currentGear &&  currentGear.map( currentGear => (
                    <div key={currentGear._id} className="card mb-3">
                        <div className="card-body">
                            <Link to={`/gear/${currentGear._id}`}>
                                <p>{currentGear.title}</p>
                                <img className="mb-0" src={currentGear.image} alt={currentGear.title}/> 
                            </Link>
                            <a href={currentGear.link}  target="_blank">
                                <p className="mb-0"> 
                                    Click here to get the gear!
                                </p>
                            </a>
                        </div>   
                        {Auth.loggedIn() && (
                    <Button
                        className='btn-block btn-info'
                        // onClick={() => handleSaveGear()}
                        >Save
                    </Button> )}
                </div>
            ))
            }        
        </div>
  
    );
};
 

export default GearListByCategory;
