import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RECIPE_COMMENT } from '../../utils/mutations';

const RecipeCommentForm = ({ recipeId }) => {
    const [commentTitle, setTitle] =useState('');
    const [commentText, setText] = useState('');
    const [characterCount1, setCharacterCount1] = useState(0);
    const [characterCount2, setCharacterCount2] = useState(0);
    console.log(recipeId);

    const [addRecipeComment, { error }] = useMutation(ADD_RECIPE_COMMENT);


    const handleChange1 = event => {
        if (event.target.value.length <= 40) {
            setTitle(event.target.value);
            setCharacterCount1(event.target.value.length)
        }
    };
    const handleChange2 = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount2(event.target.value.length)
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
        
            setCharacterCount1(event.target.value.length)
            setCharacterCount2(event.target.value.length)
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="card-body">
            <form 
                className="flex-row justify-center juistify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >  
                <p className={`m-0 ${characterCount1 === 40 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount1}/40
                {error && <span className="ml-2">Something went wrong...</span>}
                </p> 
                <textarea
                    placeholder="Enter your comment title..."
                    value={commentTitle}
                    className="form-input1 col-12 col-md-9"
                    onChange={handleChange1}
                    rows="1"
                ></textarea>
                <br></br>
                <br></br>
                <textarea
                    placeholder="Here's a new thought..."
                    value={commentText}
                    className="form-input2 col-12 col-md-9"
                    onChange={handleChange2}
                    rows="6"
                ></textarea>
                    <p className={`m-0 ${characterCount2 === 280 || error ? 'text-error' : ''}`}>
                    Character Count: {characterCount2}/280
                    {error && <span className="ml-2">Something went wrong...</span>}
                </p>
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