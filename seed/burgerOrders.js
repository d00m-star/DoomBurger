//Seeds

const db = require('../db')
const { Burger, Order, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const order1 = await new Order({
    name: 'Order',
    orderArray: []
  })

  const burgers = [
    {
      name: 'The Doom Burger',
      toppings: ['lettuce', 'onion', 'tomato', 'mayo', 'pickles', 'cheese'],
      protein: 'Beef',
      img: 'https://www.lacademie.com/wp-content/uploads/2021/04/black-burger.webp',
      description:
        'All American classic topped with lettuce, onion, tomato, pickles, american cheese, and slathered with mayonaisse'
    },
    {
      name: "Dunn's Double Doom Burger",
      toppings: ['lettuce', 'onion', 'tomato', 'mayo', 'pickles', 'cheese'],
      protein: 'Double Beef',
      img: 'https://www.meme-arsenal.com/memes/acefe266fbc0775ababb5cee3330655f.jpg',
      description: 'Take the Doom Burger, Add Meat'
    },
    {
      name: 'Whiskey Drank',
      img: 'https://st2.depositphotos.com/1105977/6189/i/450/depositphotos_61890001-stock-photo-glasses-of-whiskey-on-black.jpg',
      description: 'Whiskey, in a drank'
    }
  ]

  const review = await new Review({
    name: '',
    thought: ''
  })

  await Burger.insertMany(burgers)
  console.log('Created burgers!')
}

const run = async () => {
  await main()
  db.close()
}

run()
