//Returns Order Info

import { useState, useEffect } from 'react'

const OrderDetails = (props) => {
  return (
    <div className='order-container'>
      <div>
          <h4>{props.order.name}</h4>
          {/* {props.order.orderArray.map((i) => (
            <h4>{i}</h4>
          ))} */}
          
      </div>
    </div>
  )
}

export default OrderDetails