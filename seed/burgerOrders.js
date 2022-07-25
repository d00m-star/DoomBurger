const db = require('../db')
const { Burger, Order } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const order1 = await new Order({
    name: 'Order',
    orderArray: []
  })
  order1.save()

  const burgers = [
    {
      name: 'The Doom Burger',
      toppings: ['lettuce', 'onion', 'tomato', 'mayo', 'pickles', 'cheese'],
      protein: 'Beef',
      description:
        'All American classic topped with lettuce, onion, tomato, pickles, american cheese, and slathered with mayonaisse',
      order: order1._id
    },
    {
      name: "Dunn's Double Doom Burger",
      toppings: ['lettuce', 'onion', 'tomato', 'mayo', 'pickles', 'cheese'],
      protein: 'Double Beef',
      description: 'Take the Doom Burger, Add Meat',
      order: order1._id
    }
  ]

  await Burger.insertMany(burgers)
  console.log('Created burgers!')
}

const run = async () => {
  await main()
  db.close()
}

run()
