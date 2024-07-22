var lastName = 'Blanco';
lastName = 'Perez';
console.log(lastName);

let fruit = 'apple';
fruit = 'banana';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal); // TypeError: Assignment to constant variable.


const fruits = () => {
    if (true) {
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'banana'; // block scope
        const fruit3 = 'orange'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits(); // apple, ReferenceError: fruit2 is not defined, ReferenceError: fruit3 is not defined