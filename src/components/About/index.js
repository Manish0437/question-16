// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="about-cont">
        <h1>About Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default About
