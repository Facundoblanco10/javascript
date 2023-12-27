const totals = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum += totals[i];
}
console.log('sum', sum);

const rta = totals.reduce((acc, el) => acc + el, 0);
console.log('rta', rta);