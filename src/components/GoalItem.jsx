import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedGoalRef, goalRef } from '../firebase';


class GoalItem extends Component {

    completeGoal = () => {
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
        goalRef.child(serverKey).remove();
        completedGoalRef.push({email, title});
    }


    render() {
        const { email, title } = this.props.goal;
        return (
            <div className='GoalItem'>
                <strong>{title}</strong>
                <span className='submitted-field'> submitted by <em>{email}</em></span>
                <button
                    type='button'
                    className='btn btn-sm btn-primary'
                    onClick={this.completeGoal}
                >Complete</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps)(GoalItem);