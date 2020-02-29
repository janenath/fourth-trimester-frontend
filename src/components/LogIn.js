import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loginUser } from '../actions/userActions'

export default class LogIn extends Component {
    render() {
        const { errorMessage } = this.props
        return (
            <div className="LogIn Container">
                username <input type='text' ref='username' className="form-control" placeholder='Username'/>
                password <input type='password' ref='password' className="form-control" placeholder='Password'/>
                <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
                Login
                </button>
                {errorMessage &&
                    <p>{errorMessage}</p>
                }
            </div>
        )  
}

handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
    // console.log(this.props)
  }
}

loginUser.PropTypes = {
  loginUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}