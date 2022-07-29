//Exports Schemas for use elsewhere

const mongoose = require('mongoose')
const orderSchema = require('./orders')
const burgerSchema = require('./burgers')
const reviewSchema = require('./Reviews')

const Order = mongoose.model('Order', orderSchema)
const Burger = mongoose.model('Burger', burgerSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Order,
  Burger,
  Review
}
