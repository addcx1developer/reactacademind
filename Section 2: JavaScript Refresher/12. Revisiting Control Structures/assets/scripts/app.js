const password = prompt('Your password');

if (password === 'Hello') {
	console.log('Hello works');
} else if (password === 'hello') {
	console.log('hello works');
} else {
	console.log('Access not granted.');
}

const hobbies = ['Reading', 'Developing'];

for (const hobby of hobbies) {
	console.log(hobby);
}
