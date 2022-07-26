const { Order } = require('../models')

const getOrder = async (req, res) => {
  const order = await Order.find({})
  res.json(order)
}

const setOrder = async (req, res) => {
  const { id } = req.params
  const order = await Order.findByIdAndUpdate(id)
  res.json(order)
}

const updateOrder = async (req, res) => {
  const { id } = req.params
  const order = await Order.findByIdAndUpdate(id)
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
  updateOrder,
  setOrder
}
