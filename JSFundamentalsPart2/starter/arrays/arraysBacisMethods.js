let neighboringCountries = ['Bulgaria', 'Greece', 'Turkey', 'Romania', 'Serbia'];
console.log(neighboringCountries);
neighboringCountries.push('Utopia');
console.log(`After adding a new country:`);
console.log(neighboringCountries);
neighboringCountries.pop();
console.log(`After removing the new country`);
console.log(neighboringCountries);
if (!neighboringCountries.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
let indexOfCountry = neighboringCountries.indexOf('Romania');
neighboringCountries[indexOfCountry] = 'Republic of Romania';
console.log('After changing the name of a country');
console.log(neighboringCountries);

