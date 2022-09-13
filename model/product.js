const mongoose = require("mongoose");

const {Schema} = mongoose;

const Product = new Schema({
   product_id: String,
   quantity: Number,
   product_code: String
})

const userSchema = new Schema({
   email: String,
   phone: String,
   time_register: Date,
   cart: [Product]
})

module.exports = mongoose.model("user", userSchema);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String
  },
  information: {
    type: String
  },
  detail: {
    type: String
  },
  characteristics: {
    type: String
  },
  howtobuy: {
    type: String
  },
  avatar: {
    type: [String],
  },
  cloudinary_id: {
    type: [String],
  },
});

module.exports = mongoose.model("Product", productSchema);
