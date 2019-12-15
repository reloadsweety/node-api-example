const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Product', Product);
