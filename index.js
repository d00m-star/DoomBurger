const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Burger, Order } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

// server.js
app.get('/burgers', async (req, res) => {
  const burgers = await Burger.find({})
  res.json(burgers)
})

app.get('/burgers/:id', async (req, res) => {
  try {
    const { id } = req.params
    const burgers = await Burger.findById(id)
    if (!burgers) throw Error('Product not found')
    res.json(burgers)
  } catch (e) {
    console.log(e)
    res.send('Product not found!')
  }
})

app.get('/order/:id', async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById(id)
    if (!order) throw Error('Order not found')
    res.json(order)
  } catch (e) {
    console.log(e)
    res.send('Order not found!')
  }
})

app.get('/', async (req, res) => {
  res.send()
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
