import ReactDOM from 'react-dom/client';

import App from './App';
import configureProductsStore from './hooks-store/products-store';
import './index.css';

configureProductsStore();

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
