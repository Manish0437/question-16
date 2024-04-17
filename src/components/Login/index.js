// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    isLoggedIn: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    this.setState({isLoggedIn: true})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isLoggedIn: false})
    console.log(errorMsg)
  }

  submitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
    }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      this.onSubmitFailure(error)
    }
  }

  render() {
    const {isLoggedIn} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined || isLoggedIn) {
      return <Redirect to="/" />
    }
    return (
      <div className="bg-container">
        <form className="form-cont" onSubmit={this.submitForm}>
          <h1>Please Login</h1>
          <button type="submit">Login with Sample Creds</button>
        </form>
      </div>
    )
  }
}

export default Login
