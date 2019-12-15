const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema({
  type: {
    type: String
  },
  // products: [
  //   {
  //     product: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'Product'
  //     },
  //     quantity: Number
  //   }
  // ],
  products: [{}]
});

module.exports = mongoose.model('Order', Order);
