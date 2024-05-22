import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation.jsx';

function EventsRootLayout() {
	return (
		<>
			<EventsNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default EventsRootLayout;
