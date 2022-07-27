import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h4>Doom Burger</h4>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/review'>Review</Link>
      </nav>
    </div>
  )
}

export default Header