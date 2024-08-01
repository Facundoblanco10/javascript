const promise1 = new Promise((resolve, reject) => {
    reject("promise1");
  });
  
  const promise2 = new Promise((resolve, reject) => {
    resolve("promise2");
  });
  
  const promise3 = new Promise((resolve, reject) => {
    resolve("promise3");
  });
  
  Promise.any([promise1, promise2, promise3]).then((value) => {
    console.log(value);
  }).catch((error) => {
    console.log(error);
  });
  