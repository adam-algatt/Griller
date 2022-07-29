import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE_COMMENT_BY_USER} from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { REMOVE_RECIPE_COMMENT} from '../../utils/mutations';


const UserRecipeComment = ({ username }) => {

    const { data } = useQuery(QUERY_RECIPE_COMMENT_BY_USER);
    const [removeRecipeComment, { error }] = useMutation(REMOVE_RECIPE_COMMENT)
    const recipeCommentUser = data?.recipeCommentUser || [ ]

    // const [removeRecipeComment, { error }] = useMutation(REMOVE_RECIPE_COMMENT);

    const handleDeleteRecipeComment = async ( _id ) => {
      
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
                <h3>{username}'s {'recipe comments'}</h3>
            </div>            
            <div className="card-body">
                {recipeCommentUser &&
                    recipeCommentUser.map(comment => (
                    <div key={comment._id}>    
                        <Card className="pill mb-3">
                            <img className="recipe_image_small" src={comment.recipeId.image} alt={comment.recipeId.title}/>
                            <h4>Recipe:  {comment.recipeId.title}</h4>
                            <h4> Comment Title: {comment.commentTitle}</h4>
                            <h4>{comment.commentText}</h4>
                                               
                            {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipeComment(comment._id)}>
                                Delete
                            </Button> */}
                        
                        </Card> 
                    </div>      
                    )   
                )}
            </div>
        </div>     
    );
};

export default UserRecipeComment;