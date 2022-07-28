//Returns single burger info

import { useState, useEffect } from 'react'

const BurgerDetails = (props) => {
  
  return (
    <div className='burger-detail-component'>
      <div className="burger-info">
            <div className="burger-description" key={props.burger._id}>
              <h1>{props.burger.name}</h1>
              <img className='menu-img' src={props.burger.img}/>
              <h4>FREE</h4>
              <p>{props.burger.description}</p>
              
              <button className="menu-button">Add to Order</button>
            </div>
          
      </div>
    </div>
  )
}

export default BurgerDetails