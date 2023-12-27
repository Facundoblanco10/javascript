const items = [5, 4, 5, 3, 3, 2, 1, 9, 6, 6, 2, 5, 5];

const rta = items.reduce((acc, el) => {
    if (!acc[el]) {
        acc[el] = 1;
    } else {
        acc[el]++;
    }
    return acc;
}, {});

console.log('rta', rta);

const data = [
    {
        name: 'Nicolas',
        level: 'low',
    },
    {
        name: 'Andrea',
        level: 'medium',
    },
    {
        name: 'Zulema',
        level: 'hight',
    },
    {
        name: 'Santiago',
        level: 'low',
    },
    {
        name: 'Valentina',
        level: 'medium',
    },
    {
        name: 'Lucia',
        level: 'hight',
    },
    {
        name: 'Luciaaaa',
        level: 'hight',
    },
    {
        name: 'Luuucia',
        level: 'hight',
    },
];

const rta1 = data.map((item) => item.level).reduce((acc, el) => {
    if (!acc[el]) {
        acc[el] = 1;
    } else {
        acc[el]++;
    }
    return acc;
}, {});

console.log('rta1', rta1);

const items2 = [1, 4, 6, 7, 2, 4, 10, 8, 9, 9, 9];
const rta2 = items2.reduce((acc, el) => {
    if (el <= 5) {
        acc['1-5']++;
    } else if (el >= 6 && el <= 8) {
        acc['6-8']++;
    } else {
        acc['9-10']++;
    }
    return acc;
}, { '1-5': 0, '6-8': 0, '9-10': 0 });

console.log('rta2', rta2);