import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setGoals } from '../redux/actions'
import { goalRef } from '../firebase';
import GoalItem from './GoalItem';

class GoalList extends Component {

    componentDidMount () {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach( goal => {
                const {email, title } = goal.val();
                const serverKey = goal.key;
                goals.push({email, title, serverKey})
            });
            this.props.setGoals(goals);
        });
    }

    render () {
        return (
            <div className='GoalList'> 
                {this.props.goals.map( (goal, k) => {
                    return (
                        <GoalItem key={k} goal={goal} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { goals } = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);