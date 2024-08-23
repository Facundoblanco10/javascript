console.log("Pepe");
console.info("Pepe Info");
console.error("Pepe Error");
console.warn("Pepe Warn");
console.table([
  {
    a: 1,
    b: 2,
  },
  {
    a: 3,
    b: "Pepe Table",
    c: [1, 2, 3],
  },
]);

console.group("Group");
console.log("Pepe says hello");
console.log("bla bla bla bla");
console.log("Pepe says bye");
console.groupEnd("Group");

function function1() {
  console.group("Function 1");
  console.log("This is from function 1");
  function2();
  console.groupEnd("Function 1");
}

function function2() {
  console.group("Function 2");
  console.log("this is from function 2");
  console.groupEnd("Function 2");
}

function1();

console.count("Pepe Count");
console.count("Pepe Count");
console.count("Pepe Count");
console.count("Pepe Count");
