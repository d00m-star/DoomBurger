import { useState, useEffect } from 'react'

const OrderDetails = (props) => {
  return (
    <div className='order-container'>
      <div>
          <h4>{props.order.name}</h4>
      </div>
    </div>
  )
}

export default OrderDetails