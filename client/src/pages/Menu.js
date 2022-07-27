import BurgerDetails from '../components/BurgerDetails'
import OrderDetails from '../components/OrderDetails'
import { useState, useEffect } from 'react'

const Menu = (props) => {
  const [showBurger, setShowBurger] = useState({})

  return (
    <div className="menu-container">
      <div className="left-menu-burger-list">
        Left
        {props.burgers.map((burger) => (
          <div className="burger-names">
            <h4>{burger.name}</h4>
          </div>
        ))}
      </div>
      <div className="middle-menu-burger-info">
        Middle
        <BurgerDetails burgers={props.burgers} />
      </div>
      <div className="right-menu">
        Right
        <OrderDetails order={props.order} />
      </div>
    </div>
  )
}

export default Menu
