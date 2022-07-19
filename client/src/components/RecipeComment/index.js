import React from 'react';
// import { Link } from 'react-router-dom';

const RecipeComment = ({ recipeComment }) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h3 className="text-light">Comments</h3>
            </div>
            <div className="card-body">
                {recipeComment && 
                    recipeComment.map(recipeComment => (
                        <div className="pill mb-3" key={recipeComment._id}>
                            <h3>Title: {recipeComment.commentTitle}</h3>
                            <h4>Comment: {recipeComment.commentText}</h4>
                            <h4>Posted By:  {recipeComment.username}</h4>
                            <h4>Posted On:  {recipeComment.createdAt}</h4>
                        </div>
                    )
                )}
        </div>
    </div>
    );
};

export default RecipeComment;