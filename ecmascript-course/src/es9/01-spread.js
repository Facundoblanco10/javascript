const user = { username: "pepe", age: 23, country: "Uruguay" };
const { username, ...values } = user;
console.log(username); // pepe
console.log(values); // { age: 23, country: 'Uruguay' }