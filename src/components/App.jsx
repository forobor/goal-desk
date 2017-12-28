import React, { Component } from 'react';
import {firebaseApp} from '../firebase';

import GoalList from'./GoalList';
import AddGoal from './AddGoal';
import CompleteGoalList from './CompleteGoalList';
import './App.css';

class App extends Component {

    handleSignOut = () => {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div className = "App">
                <h2>Goal Desk</h2>
                <button
                    className="btn btn-danger sign-out"
                    type="button"
                    onClick={this.handleSignOut}
                >Sign Out</button>
                <AddGoal />
                <hr/>
                <h4>Goals</h4>
                <GoalList />
                <hr/>
                <h4>Completed Goals</h4>                
                <CompleteGoalList />
                <hr />
            </div>
        )
    }
}


export default App;