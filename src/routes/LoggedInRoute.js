import React from 'react'
import {
  Route,
} from "react-router-dom";
import { connect } from 'react-redux'

import history from '../history'
import LoggedOutRoute from './LoggedOutRoute'

const LoggedInRoute = ({
    component: Component,
    isAuthenticated,
    ...otherProps
}) => {
    if (isAuthenticated === false) {
        history.push(LoggedOutRoute);
    }
    return (
        <Route
            render={otherProps => (
                <Component {...otherProps} />
            )} 
        />
)}

function mapStateToProps(state) {

    const { auth } = state
    const { isAuthenticated, errorMessage } = auth
  
    return {
      isAuthenticated,
      errorMessage
    }
  }

export default connect(
    mapStateToProps
)(LoggedInRoute);