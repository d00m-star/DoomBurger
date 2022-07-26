const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
  {
    name: { type: String, required: true },
    orderArray: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = Order
