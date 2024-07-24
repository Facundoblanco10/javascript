const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World!"), 1000)
      : reject(new Error("Error"));
  });
};

const anotherFn = async () => {
    const hello = await fnAsync();
    console.log(hello);
    console.log("bye");
}

console.log("Before");
anotherFn();
console.log("After");