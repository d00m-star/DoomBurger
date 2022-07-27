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

//Burger Routes
app.get('/menu', burgerController.getAllBurgers)
app.put('/menu/:id', burgerController.updateBurger)
app.delete('/menu/:id', burgerController.deleteBurger)
app.post('menu/:id', burgerController.setBurger)
app.get('/menu/:id', burgerController.findBurger)

//Order Routes
// app.get('/menu', orderController.getOrder)
// app.delete('/menu', orderController.deleteOrder)
// app.post('/menu', orderController.updateOrder)
// app.put('/menu', orderController.setOrder)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
