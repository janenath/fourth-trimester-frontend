import React from 'react'
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { connect } from 'react-redux'

import logo from '../header_logo.svg'

import { logoutUser } from '../actions/userActions'


import Splash from '../components/Splash'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import About from '../components/About'
import Landing from '../components/Landing'
import Today from '../components/Today'
import AllArticles from '../components/AllArticles'
import Screening from '../components/Screening'
import LogOut from '../components/LogOut'
import NotFound from '../components/NotFound'

import LoggedInRoute from '../routes/LoggedInRoute'
import LoggedOutRoute from '../routes/LoggedOutRoute'


const Pages = (props) => {
    const { dispatch, isAuthenticated, errorMessage } = props
    if(props.isAuthenticated === true){
        return(
        <div className="homeContainer">
        <div>
        <nav>
            <div className="logoContainer">
                <img className="headerLogo" src={logo} alt="headerLogo"/>
            </div> 
            <ul>
                <li>
                <NavLink to="/home">home</NavLink>
                </li>
                <li>
                <NavLink to="/about">about</NavLink>
                </li>
                <li>
                <NavLink to="/topics">topics</NavLink>
                </li>
                <li>
                <NavLink to="/screening">screening</NavLink>
                </li>
            </ul>
            <div className="authContainer">
                <div className="authLink">
                    {/* <NavLink to="/logout">log out</NavLink> */}
                    <LogOut                                    isAuthenticated={!isAuthenticated}
                errorMessage={errorMessage}
                onLogoutClick={ event => dispatch(logoutUser()) } />
                </div>
            </div>
        </nav>
        </div>
            <Switch>
                <LoggedOutRoute path="/" exact={true} component={Splash}/>
                <LoggedOutRoute path="/login" exact={true} component={LogIn}/>
                <LoggedOutRoute path="/signup" exact={true} component={SignUp}/>
                <LoggedInRoute path="/home" exact={true} component={Home}/>
                <LoggedInRoute path="/landing" exact={true} component={Landing}/>
                <LoggedInRoute path="/today" exact={true} component={Today}/>
                <LoggedInRoute path="/about" exact={true} component={About}/>
                <LoggedInRoute path="/topics" exact={true} component={AllArticles}/>
                <LoggedInRoute path="/screening" exact={true} component={Screening}/>
                <LoggedInRoute path="/logout" exact={true} component={LogOut}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
        )} else {
            return(
                <div>
                <Switch>
                    <LoggedOutRoute path="/" exact={true} component={Splash}/>
                    <LoggedOutRoute path="/login" exact={true} component={LogIn}/>
                    <LoggedOutRoute path="/signup" exact={true} component={SignUp}/>
                    <LoggedInRoute path="/home" exact={true} component={Home}/>
                    <LoggedInRoute path="/landing" exact={true} component={Landing}/>
                    <LoggedInRoute path="/today" exact={true} component={Today}/>
                    <LoggedInRoute path="/about" exact={true} component={About}/>
                    <LoggedInRoute path="/topics" exact={true} component={AllArticles}/>
                    <LoggedInRoute path="/screening" exact={true} component={Screening}/>
                    <LoggedInRoute path="/logout" exact={true} component={LogOut}/>
                    <Route component={NotFound}/>
                </Switch>
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
  
export default connect(mapStateToProps)(Pages)