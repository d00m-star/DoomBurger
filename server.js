const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Burger, Order } = require('./models')
const burgerController = require('./controllers/BurgerController.js')
const orderController = require('./controllers/OrderController.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

//Burger Routes
app.get('/burgers', burgerController.getAllBurgers)
app.put('/burgers/:id', burgerController.updateBurger)
app.delete('/burgers/:id', burgerController.deleteBurger)
app.post('/burgers', burgerController.createBurger)
app.get('/burgers/:id', burgerController.findBurger)
//Order Routes
app.get('/order', orderController.getOrder)
app.delete('/order/:id', orderController.deleteOrder)
app.post('/order/', orderController.updateOrder)
app.put('/order/:id', orderController.updateOrder)
//Admin Route
app.get('/admin')

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
