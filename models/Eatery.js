const { Schema, model } = require('mongoose');

const eaterySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: Number,
      required: true,
    },
    // categories either a separate model or 
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    rating: 
      {
        type: Number,
        min: 1,
        max: 5
      },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// 
const Eatery = model('Eatery', eaterySchema);

module.exports = Eatery;