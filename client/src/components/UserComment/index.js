import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT_BY_USER} from '../../utils/queries';


const UserComment = ({ username }) => {

    const { data } = useQuery(QUERY_COMMENT_BY_USER);
    const recipeCommentUser = data?.recipeCommentUser || []

    console.log(recipeCommentUser)

    return (
        <div>
            <div className='card-header'>
                <h3>{username}'s {'comments'}</h3>
            </div>            
            <div className="card-body">
                {recipeCommentUser &&
                    recipeCommentUser.map(comment => (
                    <div>    
                        <Card className="pill mb-3" key={comment._id}>
                            <img className="recipe_image_small" src={comment.recipeId.image} alt={comment.recipeId.title}/>
                            <h3>Recipe:  {comment.recipeId.title}</h3>
                            <h3> Comment Title: {comment.commentTitle}</h3>
                            <h4>{comment.commentText}</h4>
                        </Card> 
                    </div>      
                    )   
                )}
            </div>
        </div>     
    );
};

export default UserComment;