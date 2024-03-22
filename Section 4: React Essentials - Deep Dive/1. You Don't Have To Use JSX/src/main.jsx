import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

const entryPoint = document.getElementById('root');
ReactDOM.createRoot(entryPoint).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
// ReactDOM.createRoot(entryPoint).render(
// 	React.createElement(React.StrictMode, null, React.createElement(App))
// );
