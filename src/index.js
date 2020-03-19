import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig'; 
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
		reactReduxFirebase(fbConfig),
		reduxFirestore(fbConfig, {attachAuthIsReady: true})
	)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));