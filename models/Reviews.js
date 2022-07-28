//Review Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    name: { type: String, required: false },
    review: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Review
