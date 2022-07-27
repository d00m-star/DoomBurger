const Menu = (props) => {
  return (
    <div className="menu-container">
      <div className='left-menu'>
        Left
        {props.burgers.map((burger) => (
          <div>
            <h4>{burger.name}</h4>
          </div>
        ))}
      </div>
      <div className='middle-menu'>
        Middle
        <div className='burger-list'>
          {props.burgers.map((burger) => (
            <div className='burger-names'>
              {burger.description}
              <button className='menu-button'>Add to Order</button>
            </div>
          ))}
          
        </div>
      </div>
      <div className='right-menu'>
        Right
        <div>
          {/* {props.order.map((o) => (
            <div>
              {o}
            </div>
          ))} */}
        </div>
      </div>
      
      </div>
  )
}

export default Menu