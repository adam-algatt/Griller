import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RECIPE_COMMENT } from '../../utils/mutations';

const RecipeCommentForm = ({ recipeId }) => {
    const [commentTitle, setTitle] =useState('');
    const [commentText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    console.log(recipeId);

    const [addRecipeComment, { error }] = useMutation(ADD_RECIPE_COMMENT);


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
                variables: { recipeId, commentTitle, commentText },
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