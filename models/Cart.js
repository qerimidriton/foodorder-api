const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema);
