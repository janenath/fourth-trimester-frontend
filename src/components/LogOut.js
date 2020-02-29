import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { logoutUser } from '../actions/userActions'

export default class LogOut extends Component {
    render() {
        const { errorMessage } = this.props
        return (
                <button onClick={(event) => this.handleClick(event)}>log out</button>
        )  
}

handleClick(event) {
    this.props.onLogoutClick()
  }
}


logoutUser.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}