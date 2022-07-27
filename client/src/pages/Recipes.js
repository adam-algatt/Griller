import React, { useState } from 'react';
import { Container, Col, Form, ToggleButtonGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import RecipeList from '../components/RecipeList'; 
import { QUERY_RECIPES_BY_CATEGORY } from '../utils/queries';


// Query all recipes on load
const Recipes = () => {
  
  // // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');


  // const { loading, data } = useQuery(QUERY_RECIPES);
  // const recipes = data?.recipes || [] 

  // console.log(recipes)
  
  const { loading, data } = useQuery(QUERY_RECIPES_BY_CATEGORY, {
    variables: {category: searchInput }
  });
  // const recipes = data?.recipe || []

  console.log(data)

  // // create method to search for recipes and set state on form submit
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  

  //   if (!searchInput) {
  //     return false;
  //   }
    
  //   try {

  //     const response = await RecipeList(searchInput);
  //     console.log(searchInput);

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     const { recipes } = await response.json();
  //     console.log(recipes)
  //     const recipeData = recipes.map((recipe) => ({
  //       _id: recipe.id,
  //       searchInput: recipe.category
  //     }));

  //     console.log(recipeData);
  //     setSearchedRecipes(recipeData);
  //     setSearchInput('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
        <Container className="card-container">
          <h2>Search for Recipes!</h2>
            <h3>Select a recipe category below to get started!</h3>
          <Form className="card-btns">
              <Col className="select" xs={8} md={8}>
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
                  label='Poultry'
                  value={'poultry'}
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
          </Form>
        </Container>

      
          <Container className="card-container">
            {loading ? (
              <div>Loading....</div>
            ) : (
            <RecipeList 
              recipes={data}
              searchInput={searchInput}    
            ></RecipeList> )}
       </Container>
   </>
  );
};

export default Recipes;

