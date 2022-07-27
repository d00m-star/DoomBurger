const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Burger = new Schema(
  {
    name: { type: String, required: true },
    toppings: { type: Array, required: true },
    protein: { type: String, required: true },
    description: { type: String, required: false },
    id: { type: Schema.Types.ObjectId, ref: 'BurgerId' }
  },
  { timestamps: true }
)

module.exports = Burger
