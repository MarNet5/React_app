// const person = {
//     //name: 'Maryna',
//     age: 28,
//     location: {
//         city: 'Chernihiv',
//         temp: 26
//     }
// };

// // const name = person.name;
// // const age = person.age;
// const { name: firstName = 'Anonymous', age } = person; //default name value, if there is not name value on the object
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if( city && temperature) {     // &&- if city and temp exist
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//    title: 'Ego in the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//        //name: 'Penguin'
//    } 
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


//Array destructing
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
// const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '2.00$', '2.50$', '2.75$'];
//const [itemName, small, medium, large] = item;
const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);