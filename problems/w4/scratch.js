numbers = [1,2,3,4]

console.log(numbers.map(n => n*2));
console.log(numbers.filter(n => n % 2 === 0));

// let total = 0;

// function addToTotal(total, num) {
//     return total + num;
// }

// for (let num of numbers) {
//     // total = total + num;
//     total = addToTotal(total, num);
// }

// console.log(total);

console.log(numbers.reduce((total, num) => {
    console.log("num:", num);
    console.log("total:", total);
    console.log("------");
    total + num}));


const cart = [
    {
        'name': 'coffee',
        'cost': 2.50
    },
    {
        'name': 'danish',
        'cost': 3.00
    },
    {
        'name': 'water',
        'cost': 1.00
    },
]

console.log(cart.reduce((total_cost, item) => {
    console.log(total_cost);
    console.log(item);
    console.log('-----');
    return total_cost + item.cost;
}, 0))
