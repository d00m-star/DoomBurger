//Returns Order Info

import { useState, useEffect } from 'react'

const OrderDetails = (props) => {
  return (
    <div className='order-container'>
      <div>
          <h4>Your Order</h4>
          {props.order.map((item) => (
            <h4>{item.name}</h4>
          ))}
          
      </div>
    </div>
  )
}

export default OrderDetails