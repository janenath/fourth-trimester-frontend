import React, { Component } from 'react';

import { connect } from 'react-redux'


import Landing from './Landing'
import Splash from './Splash'

class Home extends Component {
    render() {
        const { isAuthenticated } = this.props
        return (
            <div className={`${isAuthenticated}`}>
                {this.props.isAuthenticated === true && 
                    <div className="homeContainer">
                        <Landing />
                    </div>
                }
                {this.props.isAuthenticated === false && <Splash/>}
            </div>
        )
    }
}


function mapStateToProps(state) {

    const { auth, data } = state
    const { isAuthenticated, errorMessage } = auth
  
    return {
      isAuthenticated,
      errorMessage,
      data
    }
  }
  
export default connect(mapStateToProps)(Home)
