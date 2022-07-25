import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_GEAR_COMMENT_BY_USER} from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { REMOVE_GEAR_COMMENT} from '../../utils/mutations';


const UserGearComment = ({ username }) => {

    const { data } = useQuery(QUERY_GEAR_COMMENT_BY_USER);
    const gearCommentUser = data?.gearCommentUser || []

    console.log(gearCommentUser)

    const [removeGearComment, { error }] = useMutation(REMOVE_GEAR_COMMENT);

    const handleDeleteGearComment = async ( _id) => {
        
        try {
            const { data } = await removeGearComment({
                variables: { _id }
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className='card-header'>
                <h3>{username}'s {'gear comments'}</h3>
            </div>            
            <div className="card-body">
                {gearCommentUser &&
                    gearCommentUser.map(comment => (
                    <div>    
                        <Card className="pill mb-3" key={comment._id}>
                            <img className="recipe_image_small" src={comment.recipeId.image} alt={comment.title}/>
                            <h3>Gear:  {comment.gearId.title}</h3>
                            <h3> Comment Title: {comment.commentTitle}</h3>
                            <h4>{comment.commentText}</h4>
                                               
                            <Button className='btn-block btn-danger' onClick={() => handleDeleteGearComment(comment._id)}>
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

export default UserGearComment;