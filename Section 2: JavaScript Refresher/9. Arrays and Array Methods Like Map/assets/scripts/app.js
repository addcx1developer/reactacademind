const hobbies = ['Reading', 'Developing', 'Watching'];
console.log(hobbies[1]);

hobbies.push('Working');
console.log(hobbies);

const index = hobbies.findIndex((item) => item === 'Developing');
console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);
