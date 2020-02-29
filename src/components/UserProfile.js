import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../actions/userActions'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password_digest: '',
            due_date: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            name: this.state.name,
            email: this.state.email,
            password_digest: this.state.password_digest,
            due_date: this.state.due_date
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    render() {
        return(
            <main>
                <h1>edit user profile</h1>
                <form onSubmit={this.onSubmit}>
                    <div className = 'formContainer'>
                        <label>name</label>
                        <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
                        <br />
                        <label>email</label>
                        <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
                        <br />
                        <label>password</label>
                        <input type="text" name="password_digest" onChange={this.onChange} value={this.state.password_digest}/>
                        <br />
                        <label>due date/birth date</label>
                        <input type="date" name="due_date" onChange={this.onChange} value={this.state.due_date}/>
                        <br />
                    </div>
                </form>
            </main>
        )
    }
}

// UserProfile.propTypes = {
//     updateUser: PropTypes.func.isRequired
// }

// export default connect(null, { updateUser })(UserProfile);

export default connect(null)(UserProfile);