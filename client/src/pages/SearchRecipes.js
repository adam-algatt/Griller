import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, ToggleButtonGroup } from 'react-bootstrap';

import Auth from '../utils/auth';
import { searchWeber } from '../utils/API';
//import { saveRecipe } from '../utils/scraper';
import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_RECIPE } from '../utils/mutations';

const SearchRecipes = () => {
   // create state for holding returned google api data
    const [searchedRecipes, setSearchedRecipes] = useState([]);
   // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

   // create state to hold saved bookId values
    const [savedRecipesIds, setSavedRecipesIds] = useState(getSavedRecipeIds());

    const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);

   // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
     return () => saveRecipeIds(savedRecipesIds);
   });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
    
    try {
      console.log(searchInput);
      const response = await searchWeber(searchInput);
      console.log(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const recipeData = items.map((recipe) => ({
        recipeId: recipe.id,
      }));

      setSearchedRecipes(recipeData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveRecipe = async (recipeId) => {
    // find the recipe in `searchedRecipes` state by the matching id
    const recipeToSave = searchedRecipes.find((recipe) => recipe.recipeId === recipeId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveRecipe(recipeToSave, token);
      const { data } = await saveRecipeIds({
        variables: { newRecipe: { ...recipeToSave } },
      });

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if book successfully saves to user's account, save book id to state
      setSavedRecipesIds([...savedRecipesIds, recipeToSave.recipeId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
        <Container>
          <h1>Search for Recipes!</h1>
          <Form onSubmit={handleFormSubmit}>
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

      <Container>
        <h2>
          {searchedRecipes.length
            ? `Viewing ${searchedRecipes.length} results:`
            : 'Select a recipe category to begin'}
        </h2>
        <Card>
          {searchedRecipes.map((recipe) => {
            return (
              <Card key={recipe.recipeId} border='dark'>
                {recipe.image ? (
                  <Card.Img src={recipe.image} alt={`${recipe.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <p className='small'>Category: {recipe.category}</p>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedRecipesIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveRecipe(recipe.recipeId)}>
                      {savedRecipesIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)
                        ? 'This recipe has already been saved!'
                        : 'Save this Recipe!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </Card>
      </Container>
    </>
  );
};

export default SearchRecipes;
