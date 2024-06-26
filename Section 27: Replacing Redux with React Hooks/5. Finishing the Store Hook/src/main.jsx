import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import ProductsProvider from './context/products-context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ProductsProvider>
		<App />
	</ProductsProvider>
);
