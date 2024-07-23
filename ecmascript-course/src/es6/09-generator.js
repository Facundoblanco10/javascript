function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['pepe', 'juan', 'luis']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);