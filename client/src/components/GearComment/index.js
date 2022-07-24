import React from 'react';
// import { Link } from 'react-router-dom';


const GearComment = ({ gearComment }) => {

    return (
        <div className="card mb-3">
            <div className="card-header">
                <h3 className="text-light">Comments</h3>
            </div>
            <div className="card-body">
                {gearComment && 
                    gearComment.map(gearComment => (
                        <div className="pill mb-3" key={gearComment._id}>
                            <h3>Title: {gearComment.commentTitle}</h3>
                            <h4>Comment: {gearComment.commentText}</h4>
                            <h4>Posted By:  {gearComment.username}</h4>
                            <h4>Posted On:  {gearComment.createdAt}</h4>
                       </div>
                    )
                )}
        </div>
    </div>
    );
};

export default GearComment;