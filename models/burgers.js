const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Burger = new Schema(
  {
    name: { type: String, required: true },
    toppings: { type: Array, required: true },
    protein: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Burger', Burger)
