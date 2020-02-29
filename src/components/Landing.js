import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

import Breathe from './Breathe'

class Landing extends Component {
    render() {
        return(
        <main>
            <h1>welcome.</h1>
            <h4>take a moment to just <br/>breathe.</h4>
            <Breathe />
            <Link to="/today">ready ></Link>
        </main>
        )
    }
}

export default Landing;

