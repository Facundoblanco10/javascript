let greeting = process.env.NAME || 'World';
let web = process.env.WEB || 'Web';
console.log('Hello ' + greeting);
console.log('My web is ' + web);
