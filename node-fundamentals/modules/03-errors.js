function otherFunction() {
  return brokenFunction();
}

function brokenFunction() {
  return 3 + z;
}

function brokenAsyncFunction(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error in the async function");
      cb(error);
    }
  }, 1000);
}

try {
  brokenAsyncFunction((err) => {
    console.error("Error caught in the callback");
    console.error(err.message);
  });
} catch (error) {
  console.error("Error caught");
  console.error(error.message);
}

console.log("I am after the error");
