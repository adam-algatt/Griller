const { Schema, model } = require('mongoose');

const gearSchema = new Schema(
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    gearComment: [{
        type: Schema.Types.ObjectId,
        ref: 'GearComment'
    }]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Gear = model('Gear', gearSchema);

module.exports = Gear;