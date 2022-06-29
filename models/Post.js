
const { Schema } = require('mongoose');

const postSchema = new Schema(
    {
      postTitle: {
        type: String,
        required: true,
        minlength: 1,
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
      comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }],
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  
  module.exports = postSchema;



















   