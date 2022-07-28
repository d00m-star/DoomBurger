const { Burger } = require('../models')

const getAllBurgers = async (req, res) => {
  const burgers = await Burger.find({})
  res.json(burgers)
}

const findBurger = async (req, res) => {
  const { id } = req.params
  const burger = await Burger.findById(id)
  res.json(burger)
}

const createBurger = async (req, res) => {
  const { name, description } = req.body
  const burger = await Burger.create({ name, description })
  res.json(burger)
}

const deleteBurger = async (req, res) => {
  const { id } = req.params
  const burger = await Burger.findByIdAndRemove(id)
  res.json(burger)
}

const updateBurger = async (req, res) => {
  const { id } = req.params
  const { name, description } = req.body
  const burger = await Burger.findByIdAndUpdate(id, { name, description })
  res.json(burger)
}

module.exports = {
  getAllBurgers,
  updateBurger,
  deleteBurger,
  createBurger,
  findBurger
}
