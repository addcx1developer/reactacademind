import { useEffect, useState } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'The First Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'This is a first meetup!',
	},
	{
		id: 'm2',
		title: 'The Second Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 10, 12345 Some City',
		description: 'This is a second meetup!',
	},
];

function HomePage() {
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		// send a http request and fetch data
		setLoadedMeetups(DUMMY_MEETUPS);
	}, []);

	return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
