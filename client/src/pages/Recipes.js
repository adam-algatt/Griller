import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, ToggleButtonGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import RecipeList from '../components/RecipeList'; 
import { QUERY_RECIPES } from '../utils/queries';


// Query all recipes on load
const Recipes = () => {
  
  // // create state for holding returned google api data
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  // // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');


  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [] 


  // // set up useEffect hook to save `savedRecipesIds` list to localStorage on component unmount
  // // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  //  useEffect(() => {
  //    return () => QUERY_RECIPES;
  //  });


  // create method to search for recipes and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    if (!searchInput) {
      return false;
    }
    
    try {
      const response = await RecipeList(searchInput);
      console.log(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { recipes } = await response.json();
      console.log(recipes)
      const recipeData = recipes.map((recipe) => ({
        _id: recipe.id,
        searchInput: recipe.category
      }));

      console.log(recipeData);
      setSearchedRecipes(recipeData);
      setSearchInput('');
    } catch (err) {
  //     console.error(err);
    }
  };

  return (
    <>
        <Container className="card">
          <h2>Search for Recipes!</h2>
          <Form onSubmit={handleFormSubmit} className="card">
              <Col xs={12} md={8}>
              <ToggleButtonGroup name="controlled-radio-buttons-group">
              <Form.Check
                  label='Starters'
                  value={'starters'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                <Form.Check
                  label='Red Meat'
                  value={'red-meat'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                <Form.Check
                  label='Pork'
                  value={'pork'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                 <Form.Check
                  label='Chicken'
                  value={'chicken'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                <Form.Check
                  label='Seafood'
                  value={'seafood'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                  <Form.Check
                  label='Veggies'
                  value={'veggies'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
                  <Form.Check
                  label='Desserts and Fruit'
                  value={'desserts'}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='radio'
                  size='lg'
                  name="controlled-radio-buttons-group"
                />
               </ToggleButtonGroup> 
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
          </Form>
        </Container>

        <h3>
          {searchedRecipes.length
            ? `Viewing ${searchedRecipes.length} results for ${searchInput}:`
            : 'Select a recipe category above to narrow your search!'}
          </h3>
          <Container className="card">
            {loading ? (
              <div>Loading....</div>
            ) : (
            <RecipeList 
              recipes={recipes}
              searchInput={searchInput}    
            ></RecipeList> )}
       </Container>
   </>
  );
};

export default Recipes;

