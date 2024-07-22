let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

// template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// multi line strings
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' + 'Vestibulum nec odio et velit lacinia semper.';

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum nec odio et velit lacinia semper.`;

console.log(lorem);
console.log(lorem2);