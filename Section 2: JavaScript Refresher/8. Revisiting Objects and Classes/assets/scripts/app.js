const user = {
	name: 'Alexis',
	age: 25,
	greet() {
		console.log('Hello!');
		console.log(this.age);
	},
};

console.log(user.name);
user.greet();

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log('Hi!');
	}
}

const user1 = new User('Heather', 24);
console.log(user1);
user1.greet();
