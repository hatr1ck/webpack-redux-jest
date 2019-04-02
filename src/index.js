import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer1, reducer2} from './reducers'


let allReducers = combineReducers({
	reducer1,
	reducer2
})
let store = createStore(allReducers,{}, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));