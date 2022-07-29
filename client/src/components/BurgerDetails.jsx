//Returns single burger info
import axios from 'axios'
import { useState, useEffect } from 'react'

const BurgerDetails = (props) => {
  
  const handleClick = async () => {
    await axios.post(`http://localhost:3001/order`, props.burger)
    let tempArray = [...props.order, props.burger]
    props.setOrder(tempArray)
  }

  return (
    <div className='burger-detail-component'>
      <div className="burger-info">
            <div className="burger-description" key={props.burger._id}>
              <h1>{props.burger.name}</h1>
              <img className='menu-img' src={props.burger.img}/>
              <h4>FREE</h4>
              <p>{props.burger.description}</p>
              
              <button className="menu-button" onClick={handleClick}>Add to Order</button>
            </div>
          
      </div>
    </div>
  )
}

export default BurgerDetails