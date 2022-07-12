const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const recipeCommentSchema = new Schema(
    {
        commentTitle: {
            type: String,
            required: true,
            maxlength: 40

        },
        commentText: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        recipe: {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
            }
    },
    {
            toJSON: {
              virtuals: true
            }
    }
);


const RecipeComment = model('RecipeComment', recipeCommentSchema);

module.exports = RecipeComment;