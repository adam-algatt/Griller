import React, { useState } from 'react';
import { Container, Col, Form, ToggleButtonGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import GearList from '../components/GearList'; 
import { QUERY_GEAR_BY_CATEGORY } from '../utils/queries';


// Query all recipes on load
const Gear = () => {

   // // create state for holding our search field data
   const [searchInput, setSearchInput] = useState('');

   const { loading, data } = useQuery(QUERY_GEAR_BY_CATEGORY, {
    variables: {category: searchInput }
  });
  

  return (
    <>
      <Container className="card-container">
        <h2>Search for Gear!</h2>
          <h3>Select a gear category below to get started!</h3>
          <Form className="card-btns">
              <Col className="select" xs={8} md={8}>
              <ToggleButtonGroup name="controlled-radio-buttons-group">
              <Form.Check
                  label='Grill-Gas'
                  value={'Grill-Gas'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                <Form.Check
                  label='Grill-Electric'
                  value={'Grill-Electric'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                <Form.Check
                  label='Grill-Charcoal'
                  value={'Grill-Charcoal'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                <Form.Check
                  label='Accessory'
                  value={'Accessory'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
               </ToggleButtonGroup> 
              </Col>
          </Form>
        </Container>

          <Container className="card-container">
            {loading ? (
              <div>Loading....</div>
            ) : (
            <GearList
              gear={data}
              searchInput={searchInput} 
            ></GearList> )}
       </Container>
   </>
  );
};

export default Gear;