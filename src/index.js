import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { logUser } from './redux/actions'
import reducer from './redux/reducer'
import { firebaseApp } from './firebase'
import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import './style.css'

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged( user => {
    if (user){
        store.dispatch(logUser(user.email));
        browserHistory.push('/app')
    } else {
        browserHistory.replace('/signin')
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component = {App}/>
            <Route path="/signin" component = {SignIn} />
            <Route path="/signup" component = {SignUp} />   
        </Router>
    </Provider>,
    document.getElementById('root')
)