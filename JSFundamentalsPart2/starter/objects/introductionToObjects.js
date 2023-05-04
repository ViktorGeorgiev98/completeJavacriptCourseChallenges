let ivan = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 25,
    occupation: 'Teacher',
    city: 'Sofia'
}

console.log(ivan);
console.log(Object.keys(ivan));
console.log(Object.values(ivan));
console.log(ivan.firstName);
console.log(ivan.lastName);
ivan.lastName = 'Petrov';
console.log(ivan.lastName);