async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
console.log("Finish"); // Finish


async function namesArray(array) {
    for await (let value of array)
        console.log(value);
}

const names = namesArray(["Jhon", "Paul", "George", "Ringo"]);
console.log("Finish"); // Finish