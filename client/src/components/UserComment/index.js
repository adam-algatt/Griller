import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT_BY_USER} from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { REMOVE_RECIPE_COMMENT} from '../../utils/mutations';


const UserComment = ({ username }) => {

    const { data } = useQuery(QUERY_COMMENT_BY_USER);
    const recipeCommentUser = data?.recipeCommentUser || []

    console.log(recipeCommentUser)

    const [removeRecipeComment, { error }] = useMutation(REMOVE_RECIPE_COMMENT);

    const handleDeleteRecipeComment = async ( _id) => {
        
        try {
            const { data } = await removeRecipeComment({
                variables: { _id }
            });
        } catch (err) {
            console.error(err);
        }
    };

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
                            <img className="recipe_image_small" src={comment.recipeId.image} alt={comment.title}/>
                            <h3>Recipe:  {comment.recipeId.title}</h3>
                            <h3> Comment Title: {comment.commentTitle}</h3>
                            <h4>{comment.commentText}</h4>
                                               
                            <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipeComment(comment._id)}>
                                Delete
                            </Button>
                        </Card> 
                    </div>      
                    )   
                )}
            </div>
        </div>     
    );
};

export default UserComment;