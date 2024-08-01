const regex = /\b(Apple)+\b/g;

const str = 'Banana Apple Orange Apple Apple Pear Apple';

for (const match of str.matchAll(regex)) {
  console.log(match);
}