import Menu from "../pages/Menu"

const BurgerDetails = (props) => {
  return (
    <div className='burger-detail-component'>
      <div className="burger-info">
          {props.burgers.map((burger) => (
            <div className="burger-description">
              <h1>{burger.name}</h1>
              <img src='{burger.img}'/>
              <h4>FREE</h4>
              <p>{burger.description}</p>
              
              <button className="menu-button">Add to Order</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default BurgerDetails