const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}

letters.forEach((element) => console.log('foreach', element));
