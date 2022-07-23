import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, ToggleButtonGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import GearList from '../components/GearList'; 
import { QUERY_GEAR } from '../utils/queries';


// Query all recipes on load
const Gear = () => {

  const { loading, data } = useQuery(QUERY_GEAR);
  const gear = data?.gear || [] 

  return (
    <>
          <Container className="card">
            {loading ? (
              <div>Loading....</div>
            ) : (
            <GearList
              gear={gear} 
            ></GearList> )}
       </Container>
   </>
  );
};

export default Gear;