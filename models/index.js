//Exports Schemas for use elsewhere

const mongoose = require('mongoose')
const orderSchema = require('./Orders')
const burgerSchema = require('./Burgers')
const reviewSchema = require('./Reviews')

const Order = mongoose.model('Order', orderSchema)
const Burger = mongoose.model('Burger', burgerSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Order,
  Burger,
  Review
}
