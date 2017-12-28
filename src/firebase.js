import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBQbHKRFk_0QyPh3kr0fspDEcWB2_9HSVk",
    authDomain: "goal-desk.firebaseapp.com",
    databaseURL: "https://goal-desk.firebaseio.com",
    projectId: "goal-desk",
    storageBucket: "goal-desk.appspot.com",
    messagingSenderId: "485954271440"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completedGoalRef = firebase.database().ref('completedGoals');