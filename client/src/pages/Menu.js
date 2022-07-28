import BurgerDetails from '../components/BurgerDetails'
import OrderDetails from '../components/OrderDetails'
import axios from 'axios'
import { useState, useEffect } from 'react'

//States
const Menu = (props) => {
  const [burgers, setBurgers] = useState([])
  const [order, setOrder] = useState(null)
  const [burger, setBurger] = useState(null)
  //grabs my burger data
  const getBurgers = async () => {
    const res = await axios.get(`http://localhost:3001/burgers`)
    setBurgers(res.data)
  }
  //grabs order data
  const getOrder = async () => {
    const res = await axios.get(`http://localhost:3001/order`)
    setOrder(res.data)
  }

  useEffect(() => {
    getOrder()
  }, [])
  useEffect(() => {
    getBurgers()
  }, [])

  //Renders Menu page with components
  return (
    <div className="menu-container">
      <div className="left-menu-item-list">
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
        <div className="burger-details">
          {burger && <BurgerDetails burger={burger} />}
        </div>
      </div>
      <div className="right-menu-order-info">
        <div className="order-details">
          {order && <OrderDetails order={order} />}
        </div>
      </div>
    </div>
  )
}

export default Menu
