const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const recipeSchema = new Schema({
  category: [
    {
      type: String,
    },
  ],
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
  });

module.exports = recipeSchema;