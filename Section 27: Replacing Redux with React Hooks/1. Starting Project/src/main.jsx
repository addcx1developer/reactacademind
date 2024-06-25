import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App.jsx';
import './index.css';
import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
	shop: productReducer,
});

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);
