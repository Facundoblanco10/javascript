const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length > 6) {
        newArray.push(element);
    }
}
console.log('newArray:', newArray);
console.log('words:', words);

const rta = words.filter((item) => item.length > 6);
console.log('rta:', rta);
console.log('words:', words);

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Nicol',
        total: 242220,
        delivered: false,
    },
];

const rta2 = orders.filter((item) => item.delivered && item.total >= 100);
console.log('rta2:', rta2);
console.log('orders:', orders);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log('search:', search('Nico'));