// Write your JS code here
import {Link, withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <nav className="nav-header">
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="nav-link">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
