console.log(setInterval);

let i = 0;
let interval = setInterval(() => {
  console.log("Hello, world!");
  if (i === 3) {
    clearInterval(interval);
  }
  i++;
}, 1000);

setImmediate(() => {
  console.log("Hello, world immediate!");
});

console.log('Process', process);

console.log('dirname', __dirname);

console.log('filename', __filename);

globalThis.myVar = 'This is my variable';
console.log(myVar);