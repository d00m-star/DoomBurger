import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h4>Doom Burger</h4>
      <nav className='nav-links'>
        <Link className = 'header-links' to='/'>Home</Link>
        <Link className = 'header-links'to='/menu'>Menu</Link>
      </nav>
    </div>
  )
}

export default Header