// arrays destructuring
let fruits = ['apple', 'banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// objects destructuring
let user = {username: 'John', age: 30};
let { username, age } = user;
console.log(username, age);

// spread operator
let person = {name: 'Pepe', age: 30};
let country = 'Uruguay';

let data = { id: 1, ...person, country };
console.log(data);

// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(2, 3, 4, 5); // 5