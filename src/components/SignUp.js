// import React, { Component } from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
// import PropTypes from 'prop-types'
// import { signupUser } from '../actions/userActions'

// export default class SignUp extends Component {
//     render() {
//         const { errorMessage } = this.props
//         return (
//             <div className="SignUp Container">
//                 <h1>Sign Up</h1>
//                 <input type='text' ref='username' className="form-control" placeholder='Username'/>
//                 <input type='password' ref='password' className="form-control" placeholder='Password'/>
//                 <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
//                 Sign Up
//                 </button>
//                 <Link to="/signup"></Link>
//                 {errorMessage &&
//                     <p>{errorMessage}</p>
//                 }
//             </div>
//         )  
// }

// handleClick(event) {
//     const username = this.refs.username
//     const password = this.refs.password
//     const creds = { username: username.value.trim(), password: password.value.trim() }
//     this.props.onSignupClick(creds)
//     // console.log(this.props)
//   }
// }

// signupUser.PropTypes = {
//   signupUser: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string
// }