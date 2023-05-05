let number = Math.trunc(Math.random() * 50) + 1;
console.log(`Currently the number is ${number}`);

while (number != 44) {
    console.log(`Number ${number} is different from 44!`);
    number = Math.trunc(Math.random() * 50) + 1;
    console.log(`Currently the number is ${number}`);
    if (number === 44) {
        console.log(`We have the right number, the cycle will end...`);
    }
};