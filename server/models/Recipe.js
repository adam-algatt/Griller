const { Schema, model } = require('mongoose');

const recipeSchema = new Schema(
  {
  category: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
  
const Recipe= model('Recipe', recipeSchema);

module.exports = Recipe;