const db = require('../db')
const Burger = require('../models/orders')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const plants = [
    {
      name: 'The Doom Burger',
      toppings: ['lettuce', 'onion', 'tomato', 'pickles', 'mayo', 'cheese'],
      protein: 'Beef',
      description:
        'A classic american-style burger with fresh toppings including: Lettuce, Tomato, Onion, Pickles, Mayo, and a slice of American Cheese',
      image: ''
    },
    {
      name: "Dunn's Double Doom Burger",
      toppings: ['lettuce', 'onion', 'tomato', 'pickles', 'mayo', 'cheese'],
      protein: 'Double Beef',
      description:
        'Take the Doom Burger, and add another patty of 100% Grade-A American Beef',
      image: ''
    }
  ]

  await Burger.insertMany(burgers)
  console.log('Created some burgers!')
}
const run = async () => {
  await main()
  db.close()
}

run()
