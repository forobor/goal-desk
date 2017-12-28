import React, { Component } from 'react'
import { connect } from 'react-redux'

import { goalRef } from '../firebase';

class AddGoal extends Component {

    state = {
        title: ''
    }

    addGoal = () => {
        const { email } = this.props.user;
        const { title } = this.state; 
        goalRef.push({email, title});
        this.setState({title: ''});   
    }

    render() {
        return(
            <div>
                <div className='form-inline'>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            placeholder='Add a goal' 
                            type='text'
                            value={this.state.title}
                            onChange={event => this.setState({title: event.target.value})}
                        />
                        <button
                            className='btn btn-success'
                            type='button'
                            onClick={this.addGoal}
                        >
                                Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state;
    return { user };
}

export default connect(mapStateToProps)(AddGoal);