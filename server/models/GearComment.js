const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const gearCommentSchema = new Schema(
    {
        commentTitle: {
            type: String,
            required: 'Your comment must have a title',
            minlength: 1,
            maxlength: 40
        },
        commentText: {
            type: String,
            required: 'Your must leave a comment!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        gearId: {
            type: Schema.Types.ObjectId,
            ref: 'Gear'
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const GearComment = model('GearComment', gearCommentSchema);

module.exports = GearComment;