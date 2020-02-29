import React, { Component } from 'react';
import { connect } from 'react-redux';

class Today extends Component {
    render() {
        console.log(this.props.user)
        return(
            <main>
                <h1>today</h1>
                <ul className="todayContainer">
                    <li>- read <a href="./topics">this week's article</a></li>
                    <li>- complete <a href="./screening">postpartum depression screening</a></li>
                </ul>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return{
      user: state.user
    } 
  }
  
export default connect(
    mapStateToProps
  )(Today);
