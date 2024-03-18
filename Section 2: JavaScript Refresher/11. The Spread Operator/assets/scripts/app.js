const hobbies = ['Reading', 'Developing'];
const user = {
	name: 'Heather',
	age: 24,
};

const newHobbies = ['Watching'];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
	isAdmin: true,
	...user,
};
console.log(extendedUser);
