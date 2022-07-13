const { Schema, model } = require('mongoose');

const recipeSchema = new Schema(
  {
  category: {
      type: String,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    recipeComment: [{
      type: Schema.Types.ObjectId,
      ref: 'RecipeComment'
    }]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
  
const Recipe= model('Recipe', recipeSchema);

module.exports = Recipe;