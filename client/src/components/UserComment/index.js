import React, { useState } from 'react';
import { Link } from  'react-router-dom';
import { Card } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT_BY_USER} from '../../utils/queries';


const UserComment = ({ username }) => {

    const { loading, data } = useQuery(QUERY_COMMENT_BY_USER);
    const recipeCommentUser = data?.recipeCommentUser || []

    console.log(username)


    return (
        <div>
            <div className='card-header'>
                <h3>{username}'s {'comments'}</h3>
            </div>            
            <div className="card-body">
        
            {recipeCommentUser &&
                recipeCommentUser.map(comments => (
                    <p className="pill mb-3" key={comments._id}>
                        {comments.commentTitle}
                        <Link to={`/recipe/${comments.recipeId}`}>
                        </Link>
                        <h3>Comment Title: {comments.commentTitle}</h3>
                        <h4>{comments.commentText}</h4>
                    </p> 
                )
            )}
            </div>
        </div>     
    );
};

export default UserComment;