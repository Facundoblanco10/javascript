function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`Hello ${name}`);
      resolve(name);
    }, 1000);
  });
}

function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla...");
      resolve(name);
    }, 1000);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye ${name}`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let name = await hello("Facu");
  await talk();
  await talk();
  await talk();
  await bye(name);
  console.log("End");
}

console.log("Start");
main();
