import BurgerDetails from '../components/BurgerDetails'
import OrderDetails from '../components/OrderDetails'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Menu = (props) => {
  const [burgers, setBurgers] = useState([])
  const [order, setOrder] = useState(null)
  const [burger, setBurger] = useState(null)

  const getBurgers = async () => {
    const res = await axios.get(`http://localhost:3001/burgers`)
    setBurgers(res.data)
  }

  const getOrder = async () => {
    const res = await axios.get(`http://localhost:3001/order`)
    setOrder(res.data)
    console.log('get order..', res.data)
  }

  useEffect(() => {
    getOrder()
  }, [])
  useEffect(() => {
    getBurgers()
  }, [])

  console.log(burger)

  console.log(order)
  console.log('About to Render')
  return (
    <div className="menu-container">
      <div className="left-menu-item-list">
        Left
        {burgers.map((burger) => (
          <div
            className="item-names"
            key={burger._id}
            onClick={() => setBurger(burger)}
          >
            <h4>{burger.name}</h4>
          </div>
        ))}
      </div>
      <div className="middle-menu-item-info">
        {burger && <BurgerDetails burger={burger} />}
      </div>
      <div className="right-menu-order-info">
        {order && <OrderDetails order={order} />}
      </div>
    </div>
  )
}

export default Menu
