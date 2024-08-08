function hello(name, callback) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
    callback(name);
  }, 1000);
}

function talk(callback) {
  setTimeout(() => {
    console.log("Bla bla bla...");
    callback();
  }, 1000);
}

function bye(name, callback) {
  setTimeout(() => {
    console.log(`Bye ${name}`);
    callback();
  }, 1000);
}

function conversation(name, times, callback) {
  if (times > 0) {
    talk(function () {
      conversation(name, --times, callback);
    });
  } else {
    callback(name);
  }
}

console.log("Start");
hello("Facu", function (name) {
  conversation(name, 5, function (name) {
    bye(name, function () {
      console.log("End");
    });
  });
});

// hello("Pepe", function (name) {
//   talk(function () {
//     talk(function () {
//       talk(function () {
//         talk(function () {
//           bye(name, function () {
//             console.log("Callback bye");
//           });
//         });
//       });
//     });
//   });
// });
