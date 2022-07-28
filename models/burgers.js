//Burger Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Burger = new Schema(
  {
    name: { type: String, required: true },
    toppings: { type: Array, required: false },
    protein: { type: String, required: false },
    description: { type: String, required: true },
    id: { type: Schema.Types.ObjectId, ref: 'BurgerId' }
  },
  { timestamps: true }
)

module.exports = Burger
