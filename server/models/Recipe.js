import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, ToggleButtonGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import RecipeList from '../components/RecipeList'; 
//import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';
// import { useMutation } from '@apollo/client';
import { QUERY_RECIPES, QUERY_BY_CATEGORY } from '../utils/queries';
// Query all recipes on load
const Recipes = () => {
  
  // create state for holding returned google api data
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [] 
  // create method to search for recipes and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    if (!searchInput) {
      return false;
    }
    
    try {
      const response = await RecipeList(searchInput);
      console.log();
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const { recipes } = await response.json();
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
      {/* <Container className="card">
        <h3>
          {searchedRecipes.length
            ? `Viewing ${searchedRecipes.length} results for ${searchInput}:`
            : 'Select a recipe category above to narrow your search!'}
            </h3>
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
export default Recipes; */}
<Container>
      
              <Card className="card" border='dark'>
                 <Card.Img src="https://ux2cms.imgix.net/images/Kalua-Pork300.jpg?fit=crop&crop=focalpoint&w=885&auto=compress,format&fp-x=0.5&fp-y=0.5&fp-z=1&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=40&bm=normal" width="500" height="500" />
                 <Card.Body>
                   <Card.Title>Kalua Pork</Card.Title>
                   <p className='small'>Category: Pork</p>
                  {Auth.loggedIn() && (
                    <Button
                    className='btn-block btn-info'
                    // onClick={() => handleSaveRecipe()}
                    >Save
                  </Button>
                  )}
                </Card.Body>
              </Card>    
              <Card border='dark'>
                <Card.Img src="https://ux2cms.imgix.net/images/Recipes_US/Tuffy_Stone_BBQ_Ribs_OnGrill.jpg?fit=crop&crop=focalpoint&w=885&auto=compress,format&fp-x=0.4755&fp-y=0.5557&fp-z=1&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=40&bm=normalhttps://ux2cms.imgix.net/images/Kalua-Pork300.jpg?fit=crop&crop=focalpoint&w=885&auto=compress,format&fp-x=0.5&fp-y=0.5&fp-z=1&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=40&bm=normal" width="500" height="500" />
                <Card.Body>
                  <Card.Title>Smoked Pork Ribs</Card.Title>
                  <p className='small'>Category: Pork</p>
                  {Auth.loggedIn() && (
                    <Button
                    className='btn-block btn-info'
                    // onClick={() => handleSaveRecipe()}
                    >Save
                  </Button>
                  )}
                </Card.Body>
              </Card>   
              <Card border='dark'>
                <Card.Img src="https://ux2cms.imgix.net/images/Recipes_US/weber-swordfish-lemon-salsa-verde_web.jpg?fit=crop&crop=focalpoint&w=885&auto=compress,format&fp-x=0.5&fp-y=0.5&fp-z=1&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=40&bm=normal" width="500" height="500" />
                <Card.Body>
                  <Card.Title>Swordfish with Charred Lemon Salsa Verde</Card.Title>
                  <p className='small'>Category: Seafood</p>
                  {Auth.loggedIn() && (
                    <Button
                    className='btn-block btn-info'
                    // onClick={() => handleSaveRecipe()}
                    >Save
                  </Button>
                  )}
                </Card.Body>
              </Card>   
    </Container>
  </> 
  );
};
export default Recipes;