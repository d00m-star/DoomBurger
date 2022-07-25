const mongoose = require('mongoose')
const orderSchema = require('./Orders')
const burgerSchema = require('./Burgers')

const Order = mongoose.model('Order', orderSchema)
const Burger = mongoose.model('Burger', burgerSchema)

module.exports = {
  Order,
  Burger
}
