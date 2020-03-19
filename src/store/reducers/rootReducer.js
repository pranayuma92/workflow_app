import peopleReducer from './peopleReducer';
import authReducer from './authReducer';
import messagesReducer from './messagesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	people: peopleReducer,
	auth : authReducer,
	message: messagesReducer,
	firestore: firestoreReducer,
	firebase : firebaseReducer
})

export default rootReducer;