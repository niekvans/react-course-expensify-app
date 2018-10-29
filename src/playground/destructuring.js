// const person = {
//     name: 'Niek',
//     age: 31,
//     location: {
//         city: 'Malmö',
//         temp: 21
//     }
// };

// const { name='Anonymous', age } = person;

// console.log(`${name} is ${age}.`);


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(`${publisherName}`);

const address = ['Hyacintgatan 37', 'Malmö', 'Skåne', '21232'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Tea (hot)', '$2.00', '$2.50', '$2.75'];
const [drink, , medium,] = item;
console.log(`A medium ${drink} costs ${medium}`);