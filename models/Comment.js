const { Schema } = require('mongoose');

const commentSchema = new Schema(
    {
      commentBody: {
        type: String,
        required: true,
        maxlength: 280
      },
      username: {
        type: String,
        required: true
      },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //     get: timestamp => dateFormat(timestamp)
    //   },
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      parentPost: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  
  module.exports = commentSchema;
  