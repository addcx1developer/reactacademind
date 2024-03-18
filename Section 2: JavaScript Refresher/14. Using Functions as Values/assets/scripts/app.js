function handleTimeout() {
	console.log('Timed out!');
}

const handleTimeout2 = () => {
	console.log('Timed out ... again!');
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
	console.log('More timing out...');
}, 4000);

function greeter(greetFn) {
	greetFn();
}

greeter(() => console.log('Hi'));
