import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../header_logo.svg'

import { loginUser } from '../actions/userActions'
import LogIn from '../components/LogIn'
// import SignUp from '../components/SignUp'

class Splash extends Component {
    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props
        return(
        <main className="splashContainer">
            <img src={logo}/>
            <div className="splashAuth">
                <LogIn  isAuthenticated={!isAuthenticated}
                        errorMessage={errorMessage}
                        onLoginClick={ creds => dispatch(loginUser(creds)) }/>
            </div>
        </main>
        )
    }
}

function mapStateToProps(state) {

    const { auth } = state
    const { isAuthenticated, errorMessage } = auth
  
    return {
      isAuthenticated,
      errorMessage
    }
  }
  


export default connect(mapStateToProps)(Splash)
