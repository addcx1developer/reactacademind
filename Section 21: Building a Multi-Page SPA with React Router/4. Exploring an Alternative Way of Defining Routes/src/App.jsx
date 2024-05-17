import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';

const routeDefinitions = createRoutesFromElements(
	<Route>
		<Route path='/' element={<HomePage />} />
		<Route path='/products' element={<ProductsPage />} />
	</Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
