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
      reject('Hay un error!!!');
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

hello("Facu")
  .then(talk)
  .then(talk)
  .then(talk)
  .then(talk)
  .then(bye)
  .then((name) => {
    console.log("End");
  }).catch(error => {
    console.error('There was an error');
    console.error(error);
  });
