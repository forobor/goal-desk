import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCompletedGoals } from '../redux/actions';
import { completedGoalRef } from '../firebase';

class CompleteGoalList extends Component {
    componentDidMount() {
        completedGoalRef.on('value', snap =>{
          let completedGoals = [];
          snap.forEach(goal => {
              const { email, title } = goal.val();
              completedGoals.push({email, title});
          }) 
          this.props.setCompletedGoals(completedGoals);
        })
    }

    render() {
        return (
            <div>
                {this.props.completedGoals.map((goal, k) => {
                    const {email, title} = goal;
                    return (
                        <div key={k}>
                            <strong>{title}</strong><span> completed by <em>{email}</em></span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { completedGoals } = state;
    return {
        completedGoals
    }

}

export default connect(mapStateToProps, { setCompletedGoals })(CompleteGoalList);