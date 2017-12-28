import { combineReducers } from 'redux';
import user from './user-reducer';
import goals from './goals-reducer';
import completedGoals from './completed-goals-reducer';

export default combineReducers({
    user,
    goals,
    completedGoals
});