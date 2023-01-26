const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    img: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    weight: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
