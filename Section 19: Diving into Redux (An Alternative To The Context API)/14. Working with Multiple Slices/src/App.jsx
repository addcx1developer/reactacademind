import { Fragment } from 'react';

import Auth from './components/Auth.jsx';
import Counter from './components/Counter.jsx';
import Header from './components/Header.jsx';

function App() {
	return (
		<Fragment>
			<Header />
			<Auth />
			<Counter />
		</Fragment>
	);
}

export default App;
