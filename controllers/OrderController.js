//Controllers for Order
const { Order } = require('../models')

const getOrder = async (req, res) => {
  const order = await Order.findOne({})
  res.json(order)
}

const updateOrder = async (req, res) => {
  console.log(req.body)
  const order = await Order.findOne({})
  order.orderArray.push(req.body)
  await Order.findByIdAndUpdate(order._id, order)
  res.json(order)
}

const deleteOrder = async (req, res) => {
  const { id } = req.params
  const order = await Order.findByIdAndRemove(id)
  res.json(order)
}

module.exports = {
  getOrder,
  deleteOrder,
  updateOrder
}
