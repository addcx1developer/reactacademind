import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import FavoritesPage from './containers/Favorites';
import ProductsPage from './containers/Products';
import RootLayout from './containers/Root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <ProductsPage /> },
			{ path: '/favorites', element: <FavoritesPage /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
