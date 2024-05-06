
import './Navbar.css'

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">Electra</div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;