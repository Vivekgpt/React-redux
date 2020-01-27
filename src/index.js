import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import store from './redux/Store';
import { createStore } from 'redux';
import combineReducer from './redux/CombineReducer';

const store = createStore(combineReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));