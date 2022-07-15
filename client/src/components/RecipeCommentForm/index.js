import React, { useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_RECIPE_COMMENT } from '../../utils/mutations';
import { QUERY_RECIPE, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';


const RecipeCommentForm = (recipeId, username) => {
    const [commentText, setText] = useState('');
    const [commentTitle, setTitle] =useState('');
    const [characterCount, setCharacterCount] = useState(0);

    // useEffect(() => {
    //     const getUserData = async () => {
            // try {
            //     const token = Auth.loggedIn() ? Auth.getToken() : null;

            //     if (!token) {
            //         return false
            //     }
            //     const response = await getUserData(token);
            //     if (!response.ok) {
            //         throw new Error('something went wrong');
            //     }
            //     const user = await response.json();
            //          setUserData(user)
            // } catch (err) {
            //     console.error(err)
            // }
    //     };
    //     getUserData();
    
    // });

    const [addRecipeComment, { error }] = useMutation(ADD_RECIPE_COMMENT, {
        update(cache, { data: { addRecipeComment } }) {
            
            // could potentially not exist yet, so wrap in a try/catch
            // try {
                // update me array's cache
                const { userData } = cache.readQuery({ query: QUERY_ME });
                console.log(userData);
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { userData: { ...userData, recipeComments: [...userData.me.username, addRecipeComment] } },
                });
            // } catch (e) {
                console.warn("First comment insertion by user!")
            // }
            console.log(userData)
            // update thought array's cache
            const { recipeComment } = cache.readQuery({ query: QUERY_RECIPE });
            cache.writeQuery({
                query: QUERY_RECIPE,
                data: { recipeComments: [addRecipeComment, ...recipeComment] },
            });
        }
    });

    const handleChange1 = event => {
        if (event.target.value.length <= 280) {
            setTitle(event.target.value);
            setCharacterCount(event.target.value.length)
        }
    };
    const handleChange2 = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length)
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // add thought to database
            await addRecipeComment({
                variables: { commentTitle, commentText, recipeId, username },
            });

            // clear form value
            setText('');
            setTitle('');
            setCharacterCount(event.target.value.length)
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="card-body">
            <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form 
                className="flex-row justify-center juistify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >   
                <input
                    placeholder="Enter your comment title..."
                    value={commentTitle}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange1}
                ></input>
                <br></br>
                <br></br>
                <input
                    placeholder="Here's a new thought..."
                    value={commentText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange2}
                ></input>
                <br></br>
                <br></br>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RecipeCommentForm;