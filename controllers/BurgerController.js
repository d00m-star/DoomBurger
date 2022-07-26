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

const setBurger = async (req, res) => {
  const { id } = req.params
  const burger = await Burger.findByIdAndUpdate(id)
  res.json(burger)
}

const deleteBurger = async (req, res) => {
  const { id } = req.params
  const burger = await Burger.findByIdAndRemove(id)
  res.json(burger)
}

const updateBurger = async (req, res) => {
  const { id } = req.params
  const burger = await Burger.findByIdAndUpdate(id)
  res.json(burger)
}

module.exports = {
  getAllBurgers,
  updateBurger,
  deleteBurger,
  setBurger,
  findBurger
}
