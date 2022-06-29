const { Schema, model } = require('mongoose');

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    brand: {
      type: String,
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


const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;