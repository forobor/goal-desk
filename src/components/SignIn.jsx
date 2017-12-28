import React, { Component } from 'react';
import { Link } from 'react-router';

import { firebaseApp } from '../firebase'
import './Sign.css'

class SignIn extends Component {

    state = {
        email: '',
        password: '',
        error: {
            message: ''
        }
    }

    handleSignIn = () => {
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        return (
            <div className="form-inline">
                <div className="header-links">
                    <h2>Sign In</h2>
                    <h4 className="link"><Link to="/signup">Sign Up</Link></h4>
                </div>
                {this.state.error.message && (
                    <div className="error">
                        {this.state.error.message}
                    </div>
                )}           
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button 
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleSignIn}
                        onKeyPress = {event => event.key==='Enter' && this.handleSignIn()}                        
                    >
                        Sign In 
                    </button>
                </div>
            </div>
        )
    }
}

export default SignIn;