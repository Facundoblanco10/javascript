function hello(name, callback) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
    callback(name);
  }, 1000);
}

function bye(name, callback) {
  setTimeout(() => {
    console.log(`Bye ${name}`);
    callback();
  }, 1000);
}

console.log("Start");

hello("Pepe", function (name) {
  console.log("Callback");

  bye(name, function () {
    console.log("Callback bye");
  });
});
