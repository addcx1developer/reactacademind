import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/Error.jsx';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';
import RootLayout from './pages/Root.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/products', element: <ProductsPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
