const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Burger, Order } = require('./models')
const burgerController = require('./controllers/BurgerController.js')
// const orderController = require('./controllers/OrderController.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/burgers', burgerController.getAllBurgers)
app.post('/burgers/:id', burgerController.updateBurger)
app.delete('/burgers/:id', burgerController.deleteBurger)
app.put('burgers/:id', burgerController.setBurger)
app.get('/burgers/:id', burgerController.findBurger)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
