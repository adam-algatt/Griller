// import React from 'react';
// import RecipeList from '../components/RecipeList';


// import { useQuery } from '@apollo/client';
// import { QUERY_RECIPES } from '../utils/queries';
// // import Auth from '../utils/auth';
// // import ThoughtForm from '../components/ThoughtForm';

// const Recipes = () => {
//   // use useQuery hook to make query request
//   const { loading, data } = useQuery(QUERY_RECIPES);
//   const recipes = data?.recipes || [];
//   console.log(data)
//   // const loggedIn = Auth.loggedIn();
  
//   return (
//     <main>
//       <div className='flex-row justify-space-between'>
//         {/* {loggedIn && (
//           <div className="col-12 mb-3">
//             <ThoughtForm />
//           </div> */}
//         {/* )} */}
//         <div className={`col-12 mb-3`}>
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <RecipeList recipes={recipes} title="Something to get your mouth watering..." />
//           )}
//         </div>
//       </div>

//     </main>
//   );
// };

// export default Recipes;






import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, ToggleButtonGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import RecipeList from '../components/RecipeList'; 
//import { searchWeber } from '../utils/API';
//import { saveRecipe } from '../utils/scraper';
//import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';
// import { useMutation } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

const Recipes = () => {
  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || []   
  
  
  // create state for holding returned google api data
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

   // create state to hold saved recipeId values
    // const [savedRecipesIds, setSavedRecipesIds] = useState(getSavedRecipeIds());

    // const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);

   // set up useEffect hook to save `savedRecipesIds` list to localStorage on component unmount
   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  //   useEffect(() => {
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

      const recipeData = recipes.map((recipe) => ({
        _id: recipe.id,
      }));

      setSearchedRecipes(recipeData);
      setSearchInput('');
    } catch (err) {
  //     console.error(err);
    }
  };

  // create function to handle saving a recipe to our database
  // const handleSaveRecipe = async (recipeId) => {
  //   // find the recipe in `searchedRecipes` state by the matching id
  //   const recipeToSave = searchedRecipes.find((recipe) => recipe.recipeId === recipeId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const response = await saveRecipe(recipeToSave, token);
  //     const { data } = await saveRecipeIds({
  //       variables: { newRecipe: { ...recipeToSave } },
  //     });

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     // if recipe successfully saves to user's account, save recipe id to state
  //     setSavedRecipesIds([...savedRecipesIds, recipeToSave.recipeId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
      <Container className="card">
        <h3>
          {searchedRecipes.length
            ? `Viewing ${searchedRecipes.length} results for ${searchInput}:`
            : 'Select a recipe category above to narrow your search!'}
            </h3>
            {loading ? (
              <div>Loading....</div>
            ) : (
            <RecipeList recipes={recipes}></RecipeList> )}
      </Container>
   </>
  );
};

export default Recipes;


// {/* <Card>
// //               <Card classname="card" border='dark'>
// //                 <Card.Img src="https://ux2cms.imgix.net/images/Kalua-Pork300.jpg?fit=crop&crop=focalpoint&w=885&auto=compress,format&fp-x=0.5&fp-y=0.5&fp-z=1&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=40&bm=normal" width="500" height="500" />
// //                 <Card.Body>
// //                   <Card.Title>Kalua Pork</Card.Title>
// //                   <p className='small'>Category: Pork</p>
// //                   {Auth.loggedIn() && (
// //                     <Button
// //                     className='btn-block btn-info'
// //                     onClick={() => handleSaveRecipe()}>Save
// //                   </Button>
// //                   )}
// //                 </Card.Body>
// //               </Card>    
// //               <Card border='dark'>
// //                 <Card.Img src="https://ux2cms.imgix.net/images/Recipes_US/Tuffy_Stone_BBQ_Ribs_OnGrill.jpg?fit=crop&crop=focalpoint&w=885&auto=compress,format&fp-x=0.4755&fp-y=0.5557&fp-z=1&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=40&bm=normalhttps://ux2cms.imgix.net/images/Kalua-Pork300.jpg?fit=crop&crop=focalpoint&w=885&auto=compress,format&fp-x=0.5&fp-y=0.5&fp-z=1&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=40&bm=normal" width="500" height="500" />
// //                 <Card.Body>
// //                   <Card.Title>Smoked Pork Ribs</Card.Title>
// //                   <p className='small'>Category: Pork</p>
// //                   {Auth.loggedIn() && (
// //                     <Button
// //                     className='btn-block btn-info'
// //                     onClick={() => handleSaveRecipe()}>Save
// //                   </Button>
// //                   )}
// //                 </Card.Body>
// //               </Card>   
// //               <Card border='dark'>
// //                 <Card.Img src="https://ux2cms.imgix.net/images/Recipes_US/weber-swordfish-lemon-salsa-verde_web.jpg?fit=crop&crop=focalpoint&w=885&auto=compress,format&fp-x=0.5&fp-y=0.5&fp-z=1&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=40&bm=normal" width="500" height="500" />
// //                 <Card.Body>
// //                   <Card.Title>Swordfish with Charred Lemon Salsa Verde</Card.Title>
// //                   <p className='small'>Category: Seafood</p>
// //                   {Auth.loggedIn() && (
// //                     <Button
// //                     className='btn-block btn-info'
// //                     onClick={() => handleSaveRecipe()}>Save
// //                   </Button>
// //                   )}
// //                 </Card.Body>
// //               </Card>   
// //         </Card>
      
       
       
// //         <Card>
// //           {searchedRecipes.map((recipe) => {
// //             return (
// //               <Card key={recipe.recipeId} border='dark'>
// //                 {recipe.image ? (
// //                   <Card.Img src={recipe.image} alt={`${recipe.title}`} variant='top' />
// //                 ) : null}
// //                 <Card.Body>
// //                   <Card.Title>{recipe.title}</Card.Title>
// //                   <p className='small'>Category: {recipe.category}</p>
// //                   {Auth.loggedIn() && (
// //                     <Button
// //                       disabled={savedRecipesIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)}
// //                       className='btn-block btn-info'
// //                       onClick={() => handleSaveRecipe(recipe.recipeId)}>
// //                       {savedRecipesIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)
// //                         ? 'This recipe has already been saved!'
// //                         : 'Save this Recipe!'}
// //                     </Button>
// //                   )}
// //                 </Card.Body>
// //               </Card>
// //             );
// //           })}
// //         </Card> */}

// //       </Container>
// //     </>
// //   );
// // };

// // export default Recipes;
