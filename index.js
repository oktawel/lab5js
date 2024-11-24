import lodash from 'lodash';

const numbers = [1, 2, 3, 4, 5];
const squared = lodash.map(numbers, (n) => n * n);

console.log('Исходный массив:', numbers);
console.log('Полученный массив:', squared);


const users = [
    { id: 1, name: 'Дима', age: 25 },
    { id: 2, name: 'Никита', age: 25 },
    { id: 3, name: 'Андрей', age: 30 },
];
const grouped = lodash.groupBy(users, 'age');
console.log('Группировака по возрасту:', grouped);
