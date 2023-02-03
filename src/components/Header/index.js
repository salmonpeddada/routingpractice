// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
      className="wave-img"
    />
    <h1>wave</h1>
    <ul className="nav-items">
      <li>
        <Link className="nav-title" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-title" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-title" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
